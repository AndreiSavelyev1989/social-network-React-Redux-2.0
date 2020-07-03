import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from './../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import withAuthRedirect from './../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 6251;
        }
        
       this.props.getUserProfile(userId)
    }


    render() {

        return <>
        <Profile {...this.props} profile={this.props.profile} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const WithUrlDataContainer = withRouter(ProfileContainer);

export default withAuthRedirect(connect(mapStateToProps, { getUserProfile })(WithUrlDataContainer));