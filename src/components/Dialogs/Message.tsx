import React from 'react';

type MessagePropsType = {
    message: string
}
const Message = ({message}: MessagePropsType) => {
    return (
        <div className="message">{message}</div>
    );
};

export default Message;