import React, {Component} from 'react';

const SideBar = (props) => {
        return(
            <div className="SideBar">
                {props.user.displayName}
            </div>
        )
}

export default SideBar;