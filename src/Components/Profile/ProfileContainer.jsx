import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 6251;
        }
        
       this.props.getUserProfile(userId)
       this.props.getUserStatus(userId)
    }

    render() {

        return <>
        <Profile {...this.props} profile={this.props.profile} status = {this.props.status} updateUserStatus = {this.props.updateUserStatus}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    withRouter,
    // withAuthRedirect,
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus })
)(ProfileContainer)