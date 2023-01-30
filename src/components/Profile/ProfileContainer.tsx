import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {AppStateType} from '../../redux/redux-store';
import {getProfile} from '../../redux/profilePage-reducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

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
        return this.props.isAuth ? <Profile {...this.props}/> : <Redirect to={'/login'}/>
    }
}

type MapStateToPropsType = { profile: any, isAuth: boolean }
type MapDispatchToPropsType = { getProfile: (userId: string) => void }
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.authData.isAuth
})

export default connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer));