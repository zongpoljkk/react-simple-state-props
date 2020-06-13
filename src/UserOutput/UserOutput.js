import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return <div>
        <p>Hello!</p>
        <p>{props.username}</p>
    </div>
}

export default userOutput;
