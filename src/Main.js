import React, {Component} from 'react';
import SideBar from './SideBar'
import Chat from './Chat'

class Main extends Component {
    render() {
        return(
            <div className="Main" style={styles}>
                Main
                <SideBar user={this.props.user}/>
                <Chat user={this.props.user}/>
            </div>
        )
    }
}

const styles={
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
}

export default Main;