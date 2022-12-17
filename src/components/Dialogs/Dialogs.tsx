import React, {ChangeEvent, KeyboardEvent} from 'react';
import classes from './Dialogs.module.css'

type MessagesPropsType = {
    messageText: string
    messagesArray: Array<string>
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onSend: (text: string) => void

}
const Dialogs = ({messageText, messagesArray, onChange, onSend}: MessagesPropsType) => {
    const allMessages = messagesArray.map((message: string, index: number) => <div key={index}
                                                                                   className="message">{message}</div>)
    const onButtonClickHandler = () => onSend(messageText)
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => e.key === 'Enter' && onSend(messageText) && e.preventDefault()

    return (
        <div className={classes.messages}>
            {allMessages}
            <div><textarea value={messageText} onKeyPress={onKeyPressHandler} onChange={onChange}
                           placeholder="Enter your message"/></div>
            <div>
                <button onClick={onButtonClickHandler}>SEND</button>
            </div>
        </div>
    );
};

export default Dialogs;