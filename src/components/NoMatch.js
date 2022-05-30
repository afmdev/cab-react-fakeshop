import React from "react";
import { Link, useLocation } from "react-router-dom";

function NoMatch() {

    let location = useLocation();

    return (
        <div className="NoMatch">
        <img src="./no-items.jpg" alt="404"></img>
        <p>Sorry but the url does not exist({location.pathname}).</p>
        <Link to="/">Go to Home page</Link>
        </div>
    )
}

export default NoMatch