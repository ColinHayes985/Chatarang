import React, {Component} from 'react';
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
    constructor(){
        super()
        this.state={
            messages : [
                { id: 1, userName: 'hayes122', body: 'Message1' },
                { id: 2, userName: 'CJH', body: 'Message2' },
            ],
        }
    }

    addMessage = (body) => {
        const messages=[...this.state.messages];
        const userName='Colin'

        messages.push({
            id: `${userName}-${Date.now()}`,
            userName,
            body,
        })
        this.setState({messages})
    }
    render() {
        return(
            <div className="Chat">
                <ChatHeader/>
                <MessageList messages={this.state.messages}/>
                <MessageForm addMessage={this.addMessage}/>
            </div>
        )
    }
}

export default Chat;