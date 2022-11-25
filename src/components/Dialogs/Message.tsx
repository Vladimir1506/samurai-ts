import React from 'react';

type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className="message">{props.message}</div>
    );
};

export default Message;