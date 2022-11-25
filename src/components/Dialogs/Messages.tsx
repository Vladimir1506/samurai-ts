import React from 'react';
import Message from './Message';

type MessagesPropsType = {
    messages: Array<string>
}
const Messages = ({messages}: MessagesPropsType) => {
    const allMessages = messages.map((message: string) => <Message message={message}/>)
    return (
        <div className="messages">
            {allMessages}
        </div>
    );
};

export default Messages;