import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {AppStateType} from '../../redux/redux-store';
import {getProfile} from '../../redux/profilePage-reducer';
import {RouteComponentProps} from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

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
})


export default compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {getProfile}))(ProfileContainer)