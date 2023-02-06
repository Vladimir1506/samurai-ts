import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {AppStateType} from '../../redux/redux-store';
import {getProfile} from '../../redux/profilePage-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';

export type ProfilePagePropsType =
    MapStateToPropsType
    & MapDispatchToPropsType
    & RouteComponentProps<{ userId: string }>

class ProfileContainer extends React.Component<ProfilePagePropsType> {
    componentDidMount() {
        const userId = this.props.match.params.userId
        this.props.getProfile(userId)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

type MapStateToPropsType = { profile: any }
type MapDispatchToPropsType = { getProfile: (userId: string) => void }
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    // isAuth: state.authData.isAuth
})

export default WithAuthRedirect( connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer)))