import React, {ComponentType} from 'react';
import classes from './Dialogs.module.css';
import {Route} from 'react-router-dom';
import Messages from './Messages';
import Contacts from './Contacts';
import {messagesPageStateType, onChangeMessageText, onSendMessage} from '../../redux/messagePage-reducer';
import {AppStateType} from '../../redux/redux-store';
import {compose} from 'redux';
import {connect} from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';

type DialogsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class DialogsContainer extends React.Component<DialogsContainerPropsType> {
    render() {
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
}
type MapDispatchToPropsType = {
    onSendMessage: (contactId: string, text: string) => void
    onChangeMessageText: (contactId: string, text: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    messagePage: state.messagePage,
})
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
//     onSendMessage: (contactId: string, text: string) => dispatch(onSendMessage(contactId, text)),
//     onChangeMessageText: (contactId: string, text: string) => dispatch(onChangeMessageText(contactId, text))
// })
// export default WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(DialogsContainer))

export default compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {onSendMessage, onChangeMessageText}))(DialogsContainer)