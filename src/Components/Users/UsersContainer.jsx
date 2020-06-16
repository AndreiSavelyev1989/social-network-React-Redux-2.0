import React from 'react'
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unFollowAC, setUsersAC, setTotalUsersCountAC, setCurrentPageAC, toggleIsFetchingAC } from './../../redux/users-reducer';
import * as axios from 'axios'
import Preloader from '../common/Preloader';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
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
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => { dispatch(followAC(userId)) },
        unFollow: (userId) => { dispatch(unFollowAC(userId)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        setTotalUsersCount: (count) => { dispatch(setTotalUsersCountAC(count)) },
        setCurrentPage: (pageNumber) => { dispatch(setCurrentPageAC(pageNumber)) },
        toggleIsFetching: (isFetching) => { dispatch(toggleIsFetchingAC(isFetching)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

