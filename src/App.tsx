import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import DialogsSuperContainer from './components/Dialogs/DialogsSuperContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App: React.FC = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile/:userId?"
                       render={() => <ProfileContainer/>}/>
                <Route path="/dialogs"
                       render={() => <DialogsSuperContainer/>}/>
                <Route path="/users" component={UsersContainer}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
