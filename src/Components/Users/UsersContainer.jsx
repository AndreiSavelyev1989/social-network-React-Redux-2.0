import React from 'react'
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unFollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching, toggleFollowingInProgress } from './../../redux/users-reducer';
import Preloader from '../common/Preloader';
import { usersAPI } from './../../api/api';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(this.props.pageSize, pageNumber).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            })
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
            totalItemsCount={this.props.totalItemsCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
            portionSize={this.props.portionSize}
            followingInProgress={this.props.followingInProgress}
            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
        />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalItemsCount: state.usersPage.totalItemsCount,
        currentPage: state.usersPage.currentPage,
        portionSize: state.usersPage.portionSize,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {follow, unFollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching, toggleFollowingInProgress})(UsersContainer);

