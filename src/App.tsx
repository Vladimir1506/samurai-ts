import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import {StateType} from './index';
import {Store} from 'redux';
import DialogsContainer from './components/Dialogs/DialogsContainer';

type AppPropsType = {
    state: StateType,
    store: Store
}

const App: React.FC<AppPropsType> = ({store}) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile"
                       render={() => <Profile store={store}/>}/>
                <Route path="/dialogs"
                       render={() => <DialogsContainer store={store}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
