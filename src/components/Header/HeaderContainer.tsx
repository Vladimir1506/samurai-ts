import React from 'react';
import Header from './Header';
import {auth} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    auth: () => void,
}

export type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.auth()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = ({authData}: AppStateType): MapStateToPropsType => ({
    login: authData.login,
    isAuth: authData.isAuth
})

export default connect(mapStateToProps, {auth})(HeaderContainer)

