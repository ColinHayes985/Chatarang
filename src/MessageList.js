import React from 'react';
import Message from './Message';

const MessageList = (props) => {
    const messages = [
            { id: 1, userName: 'hayes122', body: 'Message1' },
            { id: 2, userName: 'CJH', body: 'Message2' },
          ]
    return(
        <div className="MessageList">
            {messages.map(msg=>(<Message message={msg} key={msg.id}/>))}
        </div>
    )
}

export default MessageList;