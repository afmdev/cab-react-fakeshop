import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";

function NoMatch() {

	let location = useLocation();


	return (
		<div className="NoMatch text-center pt-5 px-3">
			<h1>404</h1>
			<h3 className="mb-5">Not Found</h3>
			<img src="./no-items.jpg" alt="404" width="300px" height="197px" className="mb-5"></img>
			<p>Sorry but we can not found the following URL:<br /><strong>{location.pathname}</strong></p>
			<a href="/" className="btn btn-danger">
				Go back Home
			</a>
		</div>
	)
}

export default NoMatch



