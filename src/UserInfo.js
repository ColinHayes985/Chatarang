import React, {Component} from 'react'

const UserInfo = (props) => {    
    return(
        <div className="UserInfo" style={styles.UserInfo}>
            <div
                className="Avatar"
            >
            </div>
            <div className="user" style={styles.user}>{props.user.displayName}</div>
            <a href="#">
                <i className="fas fa-sign-out-alt"></i>
            </a>
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