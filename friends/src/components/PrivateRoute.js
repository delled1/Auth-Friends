import React from "react";
import {Redirect, Route} from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest}) => {
    return (
        <Route {...rest} render = {(componentProps) => {
            if (localStorage.getItem("token")) {
                console.log("TOKEN FOUND");
                return <Component {...componentProps} />
            }

            else {
                console.log("NO TOKEN FOUND, redirect to login")
                return <Redirect to="/login" />
            }
        }}
        />
    )
}

export default PrivateRoute