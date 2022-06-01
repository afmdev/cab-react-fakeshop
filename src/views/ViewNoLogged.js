import React from "react";
import { EmojiDizzy } from "react-bootstrap-icons";
import LoginForm from "../components/LoginForm";

// import Menu from '../components/Menu'
// import Searchbar from '../components/Searchbar'

function ViewNoLogged() {
	return (
		<div className="NoLogged text-center pt-5 px-3">
			<EmojiDizzy size={60} className="mb-3" />
			<h1>Restricted Area</h1>
			<p className="pb-4 px-5">
				To access this section you must register and log in to your account.
			</p>
			<LoginForm />
		</div>
	);
}

export default ViewNoLogged;
