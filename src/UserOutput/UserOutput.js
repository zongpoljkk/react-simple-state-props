import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    const inputStyle = {
        border: '2px solid black',
        backgroundColor: '#ccc'
    };

    return <div style={inputStyle}>
        <p>Hello!</p>
        <p>{props.username}</p>
    </div>
}

export default userOutput;
