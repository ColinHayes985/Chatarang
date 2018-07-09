import React, {Component} from 'react';
import SideBar from './SideBar'
import Chat from './Chat'

class Main extends Component {
    render() {
        return(
            <div className="Main">
                Main
                <SideBar/>
                <Chat/>
            </div>
        )
    }
}

export default Main;