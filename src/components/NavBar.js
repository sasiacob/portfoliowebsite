import React from "react";

export default function Navbar() {
	return (
		<div className="App-Navbar">
			<h1>Portfolio</h1>

			<nav>
				<ul className="nav__links">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/mywork">My work</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
