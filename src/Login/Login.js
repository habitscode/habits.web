import React from 'react'

const login = (props) => {
    return (
        <div className="Login">
            <label>
                User: 
                <input type="text" />
            </label>
            <label>
                Password:
                <input type="password" />
            </label>
            <button onClick={props.click}>Login</button>
        </div>
    )
}

export default login;