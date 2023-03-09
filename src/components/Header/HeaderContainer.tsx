import React from 'react';
import Header from './Header';
import {logout} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

class HeaderContainer extends React.Component<HeaderContainerType> {
    render() {
        return <Header {...this.props}/>
    }
}

export type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    logout: () => void
}
const mapStateToProps = ({authData}: AppStateType): MapStateToPropsType => ({
    login: authData.login,
    isAuth: authData.isAuth
})

export default connect(mapStateToProps, {logout})(HeaderContainer)

