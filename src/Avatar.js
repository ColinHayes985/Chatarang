import React from 'react'

const Avatar = ({user}) => {
    const imageUrl = `https://api.adorable.io/avatars/40/${user.email}.png`
    return(
        <div className="Avatar" style={{...styles.Avatar, backgroundImage: `url(${imageUrl})`,}}/>
    )
}
const styles ={
    Avatar: {
        height: '40px',
        width: '40px',
        fontSize: '1rem',
        borderRadius: '20px',
        marginRight: '0.5rem',
    } 
}
export default Avatar;