import React from "react";
import { Route, Redirect } from 'react-router-dom';

const AuthenticationCheck = (props) => {

    return <Route render={ () => {
        if (localStorage.getItem("token") === "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ") {
            return (
                <div>
                    <p>This is authenticated</p>
                </div>
            )}
        else {
            return <Redirect to="/login"/>
        }
    }}
    />
}

export default AuthenticationCheck;