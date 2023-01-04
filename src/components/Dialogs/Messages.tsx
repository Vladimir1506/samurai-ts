import React, {ChangeEvent, KeyboardEvent} from 'react';
import classes from './Dialogs.module.css'

type MessagesPropsType = {
    messageText: string
    messagesArray: Array<string>
    onChange: (text: string) => void
    onSend: (text: string) => void

}
const Messages: React.FC<MessagesPropsType> = ({messageText, messagesArray, onChange, onSend}: MessagesPropsType) => {
    const allMessages = messagesArray.map((message: string, index: number) => <div key={index}
                                                                                   className="message">{message}</div>)
    const onButtonClickHandler = () => onSend(messageText)
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => e.key === 'Enter' && onSend(messageText) && e.preventDefault()
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.currentTarget.value)
    return (
        <div className={classes.messages}>
            {allMessages}
            <div><textarea value={messageText} onKeyPress={onKeyPressHandler} onChange={onChangeMessageHandler}
                           placeholder="Enter your message"/></div>
            <div>
                <button onClick={onButtonClickHandler}>SEND</button>
            </div>
        </div>
    );
};

export default Messages;