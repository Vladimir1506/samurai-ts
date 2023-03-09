import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {AppStateType} from '../../redux/redux-store';
import {getProfile, getUserStatus, ProfileType, updateStatus} from '../../redux/profilePage-reducer';
import {RouteComponentProps} from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

export type ProfilePagePropsType =
    MapStateToPropsType
    & MapDispatchToPropsType
    & RouteComponentProps<{ userId: string }>

class ProfileContainer extends React.Component<ProfilePagePropsType> {
    componentDidMount() {
        // const userId = this.props.match.params.userId || (this.props.profile && this.props.profile.userId)
        // if (userId) {
        //     this.props.getProfile(userId)
        //     this.props.getUserStatus(userId)
        // }
        let userId = this.props.match.params.userId
        if (!userId) {
            if (this.props.profile) userId = this.props.profile.userId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

type MapStateToPropsType = { profile: ProfileType, status: string }
type MapDispatchToPropsType = {
    getProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {getProfile, getUserStatus, updateStatus}))(ProfileContainer)