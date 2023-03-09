import React, {Component} from 'react';
import LoginForm, {LoginDataType} from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';

export type LoginType = MapStateToPropsType & MapDispatchToPropsType

class Login extends Component <LoginType> {
    render() {

        return (
            <>
                <h1> Login </h1>
                <LoginForm login={this.props.login}/>
            </>
        );
    }
}

type MapStateToPropsType = {
    initialized: boolean
}
const mapStateToProps = ({app}: AppStateType): MapStateToPropsType => ({

    initialized: app.initialized
})
type MapDispatchToPropsType = {
    login: (data: LoginDataType, setStatus: (status?: any) => void) => void,
}
export default connect(mapStateToProps, {login})(Login);


