import React from 'react';
import Header from './Header';
import axios from 'axios';
import {setUserData} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
type MapDispatchToPropsType = { setUserData: (userId: string | null, email: string | null, login: string | null) => void }

export type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }).then((response) => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                this.props.setUserData(id, email, login)
            }
        })
    }

    render() {
        debugger
        return <Header {...this.props}/>
    }
}

const mapStateToProps = ({authData}: AppStateType): MapStateToPropsType => ({
    login: authData.login,
    isAuth: authData.isAuth
})

export default connect(mapStateToProps, {setUserData})(HeaderContainer)

