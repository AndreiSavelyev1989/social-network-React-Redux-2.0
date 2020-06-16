import React from 'react'
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unFollowAC, setUsersAC, setTotalUsersCountAC, setCurrentPageAC } from './../../redux/users-reducer';
import * as axios from 'axios'


class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return <Users
            totalItemsCount={this.props.totalItemsCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
            portionSize={this.props.portionSize}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalItemsCount: state.usersPage.totalItemsCount,
        currentPage: state.usersPage.currentPage,
        portionSize: state.usersPage.portionSize,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => { dispatch(followAC(userId)) },
        unFollow: (userId) => { dispatch(unFollowAC(userId)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        setTotalUsersCount: (count) => { dispatch(setTotalUsersCountAC(count)) },
        setCurrentPage: (pageNumber) => { dispatch(setCurrentPageAC(pageNumber)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

