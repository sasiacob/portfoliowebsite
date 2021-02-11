import React from "react";

export default function Navbar() {
	return (
		<div className="App-Navbar">
			<h1>Portfolio</h1>

			<nav>
				<ul className="nav__links">
					<li>
						<a href="/portfoliowebsite/#/">Home</a>
					</li>
					<li>
						<a href="/portfoliowebsite/#/mywork">My work</a>
					</li>
					<li>
						<a href="/portfoliowebsite/#/about">About</a>
					</li>
					<li>
						<a href="/portfoliowebsite/#/contact">Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
