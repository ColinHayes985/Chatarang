import React, {Component} from 'react';
import SideBar from './SideBar'
import Chat from './Chat'
import RoomForm from './RoomForm';
import base from './base'

class Main extends Component {
    state={
        room:{
            name:'general',
            description:'Chat aboout stuff',
        },
        rooms:{},
        showRoomForm:false,
    }
    componentDidMount(){
        this.roomsRef=base.syncState(
            'rooms',
            {
                context: this,
                state:'rooms',
                defaultValue:{
                    general:{
                        name:'general',
                        description:'Chat about stuff',
                    },
                }
            }
        )
    }
    componentWillUnmount(){

        base.removeBinding(this.roomsRef)
    }
    addRoom = room => {
        const rooms = {...this.state.rooms}
        rooms[room.name] = room
    
        this.setState({ rooms })
    }
    setCurrentRoom=roomName=>{
        const room=this.state.roos[roomName]
        this.setState({room})
    }
    showRoomForm=()=>{
        this.setState({showRoomForm:true})
    }
    hideRoomForm=()=>{
        this.setState({showRoomForm:false})
    }
    render() {
        if(this.state.showRoomForm){
            return
            <RoomForm addRoom={this.addRoom}
            hideRoomForm={this.hideRoomForm}/>
        }
        return(
            <div className="Main" style={styles}>
                <SideBar user={this.props.user} signOut={this.props.signOut}/>
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