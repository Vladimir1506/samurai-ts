import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {AppStateType} from '../../redux/redux-store';
import {setProfile} from '../../redux/profilePage-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {usersAPI} from '../../api/api';

export type ProfilePagePropsType =
    MapStateToPropsType
    & MapDispatchToPropsType
    & RouteComponentProps<{ userId: string }>

class ProfileContainer extends React.Component<ProfilePagePropsType> {
    componentDidMount() {
        console.log('didMount')
        const userId = this.props.match.params.userId
        console.log(userId)
        userId ? usersAPI.getProfile(userId).then(data => {
            setTimeout(() => {
                this.props.setProfile(data)
            }, 2000)
        }) : this.props.setProfile(null)
    }

    render() {
        console.log('render')

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