import React, {ChangeEvent, KeyboardEvent} from 'react';
import classes from './Dialogs.module.css'
import {MessageType} from '../../redux/store';

type MessagesPropsType = {
    messageData: MessageType
    onChange: (text: string) => void
    onSend: (text: string) => void

}
const Messages = ({messageData: {messageText, messagesArray}, onChange, onSend}: MessagesPropsType) => {
    const allMessages = messagesArray.map((message: string, index: number) => <div key={index}
                                                                                   className="message">{message}</div>)
    const onChangeTextareaValue = (e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.currentTarget.value.trim())
    const onButtonClickHandler = () => onSend(messageText)
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => e.key === 'Enter' && onSend(messageText) && e.preventDefault()

    return (
        <div className={classes.messages}>
            {allMessages}
            <div><textarea value={messageText} onKeyPress={onKeyPressHandler} onChange={onChangeTextareaValue}
                           placeholder="Enter your message"/></div>
            <div>
                <button onClick={onButtonClickHandler}>SEND</button>
            </div>
        </div>
    );
};

export default Messages;