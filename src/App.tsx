import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import {AppStateType} from './redux/redux-store';
import Preloader from './components/common/Preloader';
import {compose} from 'redux';


class App extends React.Component<AppContainerType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        return this.props.initialized ? (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" component={ProfileContainer}/>
                    <Route path="/dialogs" component={DialogsContainer}/>
                    <Route path="/users" component={UsersContainer}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/login" component={Login}/>
                </div>
            </div>
        ) : <Preloader/>
    }
}

type AppContainerType = MapDispatchToPropsType & MapStateToPropsType
type MapDispatchToPropsType = {
    initializeApp: () => void,
}
type MapStateToPropsType = {
    initialized: boolean
}
const mapStateToProps = ({app}: AppStateType) => ({
    initialized: app.initialized
})

export default compose<React.ComponentType>(
    // withAuthRedirect,
    connect(mapStateToProps, {initializeApp}))(App)
