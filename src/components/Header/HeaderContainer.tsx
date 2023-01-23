import React from 'react';
import Header from './Header';
import {setUserData} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {usersAPI} from '../../api/api';

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
type MapDispatchToPropsType = { setUserData: (userId: string | null, email: string | null, login: string | null) => void }

export type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        usersAPI.auth().then((data) => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                this.props.setUserData(id, email, login)
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = ({authData}: AppStateType): MapStateToPropsType => ({
    login: authData.login,
    isAuth: authData.isAuth
})

export default connect(mapStateToProps, {setUserData})(HeaderContainer)

