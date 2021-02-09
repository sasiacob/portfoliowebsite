import React from "react";

export default function Home() {
	return (
		<div className="App">
			<header className="App-header">
				{/*  <img src={logo} className="App-logo" alt="logo" />*/}

				<div className="App-content">
					<h1 className="content-element first-element">
						{" "}
						Sas Iacob Constantin Homepage{" "}
					</h1>
					<p className="content-element">
						<b>Hello world and welcome to my homepage!</b>
					</p>
					<p className="content-element">
						My name is Sas Iacob Constantin, and this is my website. You can
						take a look at my projects, key informations about me, or contact
						me.
					</p>
					<p>Currently I'm a Computer Science student, on the 4th year.</p>
				</div>
			</header>
		</div>
	);
}
