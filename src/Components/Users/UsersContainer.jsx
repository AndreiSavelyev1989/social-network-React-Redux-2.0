import React from 'react'
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unFollow, getUsers } from './../../redux/users-reducer';
import Preloader from '../common/Preloader';
import withAuthRedirect from './../../hoc/withAuthRedirect';
import { compose } from 'redux';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, pageNumber)
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

export default compose (
    connect(mapStateToProps, {follow, unFollow, getUsers}),
    withAuthRedirect
)(UsersContainer)

