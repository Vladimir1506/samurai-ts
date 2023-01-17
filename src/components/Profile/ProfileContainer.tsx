import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {AppStateType} from '../../redux/redux-store';
import {setProfile} from '../../redux/profilePage-reducer';
import axios from 'axios';
import {RouteComponentProps, withRouter} from 'react-router-dom';

export type ProfilePagePropsType =
    MapStateToPropsType
    & MapDispatchToPropsType
    & RouteComponentProps<{ userId: string }>

class ProfileContainer extends React.Component<ProfilePagePropsType> {
    componentDidMount() {
        const userId = this.props.match.params.userId
        console.log(userId)
        userId ? axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
        ).then(response => {
            setTimeout(() => {
                this.props.setProfile(response.data)
            }, 2000)
        }) : this.props.setProfile(null)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

type MapStateToPropsType = {
    profile: any
}
type MapDispatchToPropsType = {
    setProfile: (profile: any) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setProfile})(withRouter(ProfileContainer));