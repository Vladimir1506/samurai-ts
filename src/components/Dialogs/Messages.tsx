import React from 'react';
import Message from './Message';
import classes from './Dialogs.module.css'

type MessagesPropsType = {
    messagesArray: Array<string>
}
const Messages = ({messagesArray}: MessagesPropsType) => {
    const allMessages = messagesArray.map((message: string) => <Message message={message}/>)
    return (
        <div className={classes.messages}>
            {allMessages}
        </div>
    );
};

export default Messages;