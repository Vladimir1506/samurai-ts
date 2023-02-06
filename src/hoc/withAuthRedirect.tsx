import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../redux/redux-store';
import {connect} from 'react-redux';

type MapStateToPropsRedirectType = {
    isAuth: boolean
}
const mapStateToPropsRedirect = (state: AppStateType): MapStateToPropsRedirectType => ({
    isAuth: state.authData.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    class RedirectComponent extends React.Component<MapStateToPropsRedirectType> {

        render() {
            const {isAuth, ...restProps} = this.props
            return this.props.isAuth ? <Component {...restProps as T}/> : <Redirect to={'/login'}/>
        }
    }

    return connect(mapStateToPropsRedirect)(RedirectComponent)
}

export default withAuthRedirect;