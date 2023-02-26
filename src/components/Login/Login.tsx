import React, {Component} from 'react';
import LoginForm, {LoginDataType} from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';

class Login extends Component <MapDispatchToPropsType> {
    render() {
        return (
            <>
                <h1> Login </h1>
                <LoginForm login={this.props.login}/>
            </>
        );
    }
}

type MapDispatchToPropsType = {
    login: (data: LoginDataType, setStatus: (status?: any) => void) => void
}
export default connect(null, {login})(Login);


