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
import {StoreType} from './state';

type AppPropsType = { store: StoreType }

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile"
                       render={() => <Profile changePostTextValue={props.store.changePostTextValue.bind(props.store)}
                                              addPost={props.store.addPost.bind(props.store)}
                                              profileData={props.store.getState().profilePage}/>}/>
                <Route path="/dialogs"
                       render={() => <Dialogs messagesPage={props.store.getState().messagesPage}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
