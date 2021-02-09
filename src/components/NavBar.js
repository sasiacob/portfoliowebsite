import React from "react";
import { NavLink } from "react-router-dom";
export default function NavBar() {
	return (
		<header className="bg-red-200 ">
			<div className="container mx-auto flex justify-between">
				<nav className="flex">
					<NavLink
						to="/"
						exact
						activeClassName="text-white"
						className="inflex-flex items-center py-6 px-3 mr-4 text-red-200 hover:text-green-800 text-4xl font-bold  cursive tracking-widest"
					>
						Home
					</NavLink>
					<NavLink
						className="inline-flex items-center py-3 px-3 my-6 rounded text-red-800 hover:text-green-800"
						to="/post"
                        activeClassName="text-red-100 bg-red-500"
					>
						Blog Postss
					</NavLink>
					<NavLink
						className="inline-flex items-center py-3 px-3 my-6 rounded text-red-800 hover:text-green-800"
						to="/project"
                        activeClassName="text-red-100 bg-red-500"
					>
						Projects
					</NavLink>
					<NavLink
						className="inline-flex items-center py-3 px-3 my-6 rounded text-red-800 hover:text-green-800"
						to="/about"
                        activeClassName="text-red-100 bg-red-500"
					>
						About
					</NavLink>
				</nav>
			</div>
		</header>
	);
}
