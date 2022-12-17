import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import {StateType} from './index';
import {AnyAction} from 'redux';

type AppPropsType = {
    state: StateType,
    dispatch: (action: AnyAction) => void
}

const App: React.FC<AppPropsType> = ({state, dispatch}) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile"
                       render={() => <Profile dispatch={dispatch}
                                              profileData={state.profilePageReducer}/>}/>
                <Route path="/dialogs"
                       render={() => <Dialogs
                           dispatch={dispatch}
                           messagesPage={state.messagePageReducer}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
