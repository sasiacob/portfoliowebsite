import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Contact from "./components/Contact";
import MyWork from "./components/MyWork";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import copieApp from "./components/copieApp";
import Footer from "./components/footer";
import Navbar from "./components/NavBar";

export default function App() {
	return (
		<HashRouter>
			<NavBar />

			<Switch>
				<Route component={Home} path="/" exact />
				<Route component={About} path="/about" />
				<Route component={SinglePost} path="/post/:slug" />
				<Route component={Post} path="/post" />
				<Route component={Contact} path="/contact" />
				<Route component={MyWork} path="/mywork" />
				<Route component={Project} path="/project" />
			</Switch>
			<Footer />
		</HashRouter>
	);
}
