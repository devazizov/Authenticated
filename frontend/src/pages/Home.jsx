import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext";

export const Home = () => {
	const { user, logout } = useContext(authContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, []);

	return (
		<div>
			<h1>Home page</h1>
			<h1>Username: {user.username}</h1>
			<h1>First Name: {user.first_name}</h1>
			<h1>Last Name: {user.last_name}</h1>
			<h1>Email: {user.email}</h1>
			<button onClick={logout}>Logout</button>
		</div>
	);
};
