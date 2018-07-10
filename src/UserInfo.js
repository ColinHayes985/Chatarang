import React, {Component} from 'react'
import Avatar from './Avatar'
import SignOut from './SignOut';

const UserInfo = ({user, signOut}) => {    
    return(
        <div className="UserInfo" style={styles.UserInfo}>
            <Avatar user={user}/>
            <div className="user" style={styles.user}>{user.displayName}</div>
            <SignOut signOut={signOut}/>
        </div>
        )
}
const styles ={
    UserInfo: {
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
      },
    Avatar: {
        marginRight: '0.5rem',
    },
    user: {
        flex: '1',
        overflowX:'hidden',
        textOverflow:'ellipsis',
    },
    a: {
        border: '0',
        padding: '0',
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '1.2rem',
        transition: 'color 0.25s ease-out',
      },
    //a:hover {
    //    color: white;
    //}
      
}
export default UserInfo;