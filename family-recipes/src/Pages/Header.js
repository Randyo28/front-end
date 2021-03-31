import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import img from "../Assets/logo.png";

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	border-bottom: solid 2px rgba(0, 0, 0, 0.1);

	.logo {
		margin: 2px 3% 0;
		width: 4.5%;
		padding: 0.5% 0;
	}

	img {
		width: 100%;
	}

	div {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.a {
		width: 17%;
		text-align: center;
		padding: 1% 0;
		font-size: 1.1rem;
		text-decoration: none;
		color: #ffffff;
		margin-right: 5%;
		border: 2px solid;
		border-radius: 25px;
		background-color: #fb5c7c;
		font-weight: 500;
		font-family: "Ubuntu", sans-serif;
	}
`;

const Header = ({ signedIn, signOut }) => {
	return (
		<StyledHeader>
			<Link className="logo" to="/">
				<img src={img} alt="secret family recipes logo"></img>
			</Link>
			<div>
				<NavLink className="a" to="/">
					Home
				</NavLink>
				{!signedIn ? null : (
					<NavLink
						className="a"
						to="/"
						onClick={() => signOut(!signedIn)}
					>
						Log Out
					</NavLink>
				)}
			</div>
		</StyledHeader>
	);
};

export default Header;
