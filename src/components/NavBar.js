import React from "react";

export default function Navbar() {
	return (
		<div className="container-nav">
			<div>
				<h1 className="site-title">Portfolio</h1>
			</div>
			<nav>
				<ul className="nav-list">
					<li className="nav-list-item">
						<a className="nav-link" href="/portfoliowebsite/#/">
							Home
						</a>
					</li>
					<li className="nav-list-item">
						<a className="nav-link" href="/portfoliowebsite/#/mywork">
							My work
						</a>
					</li>
					<li className="nav-list-item">
						<a className="nav-link" href="/portfoliowebsite/#/about">
							About
						</a>
					</li>
					<li className="nav-list-item">
						<a className="nav-link" href="/portfoliowebsite/#/contact">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
