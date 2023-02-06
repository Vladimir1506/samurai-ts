import React from 'react';
import classes from './Dialogs.module.css';
import {Route} from 'react-router-dom';
import Messages from './Messages';
import Contacts from './Contacts';
import {changeMessageTextValueAC, messagesPageStateType, sendMessageAC} from '../../redux/messagePage-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';

type DialogsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class DialogsContainer extends React.Component<DialogsContainerPropsType> {
    render() {
        // if (!this.props.isAuth) return <Redirect to={'/login'}/>
        const messages = this.props.messagePage.messages
        const messagesRoutes = Object.keys(messages).map((contactId) => {
            const onChangeMessageTextHandler = (text: string) => this.props.onChangeMessageText(contactId, text)
            const onSendMessageHandler = (text: string) => this.props.onSendMessage(contactId, text)
            const {messageText, messagesArray} = messages[contactId]
            const routeMessagesRender = () => <Messages
                onChange={onChangeMessageTextHandler}
                onSend={onSendMessageHandler}
                messageText={messageText}
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
    // isAuth: boolean
}
type MapDispatchToPropsType = {
    onSendMessage: (contactId: string, text: string) => void
    onChangeMessageText: (contactId: string, text: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    messagePage: state.messagePage,
    // isAuth: state.authData.isAuth
})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    onSendMessage: (contactId: string, text: string) => dispatch(sendMessageAC(contactId, text)),
    onChangeMessageText: (contactId: string, text: string) => dispatch(changeMessageTextValueAC(contactId, text))
})
export default WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(DialogsContainer))

