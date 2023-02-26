import React, {ComponentType} from 'react';
import classes from './Dialogs.module.css';
import {Route} from 'react-router-dom';
import Messages from './Messages';
import Contacts from './Contacts';
import {messagesPageStateType, onSendMessage} from '../../redux/messagePage-reducer';
import {AppStateType} from '../../redux/redux-store';
import {compose} from 'redux';
import {connect} from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';

type DialogsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class DialogsContainer extends React.Component<DialogsContainerPropsType> {
    render() {
        const messages = this.props.messagePage.messages
        const messagesRoutes = Object.keys(messages).map((contactId) => {
            const onSendMessageHandler = (text: string) => this.props.onSendMessage(contactId, text)
            const {messagesArray} = messages[contactId]
            const routeMessagesRender = () => <Messages
                onSend={onSendMessageHandler}
                messagesArray={messagesArray}/>
            return <Route key={contactId} path={'/dialogs/' + contactId} render={routeMessagesRender}/>
        })
        return <div className={classes.contacts}>
            <Contacts contacts={this.props.messagePage.contacts}/>
            <div>{messagesRoutes}</div>
        </div>
    }
}

type MapStateToPropsType = {
    messagePage: messagesPageStateType
}
type MapDispatchToPropsType = {
    onSendMessage: (contactId: string, text: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    messagePage: state.messagePage,
})

export default compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {onSendMessage}))(DialogsContainer)