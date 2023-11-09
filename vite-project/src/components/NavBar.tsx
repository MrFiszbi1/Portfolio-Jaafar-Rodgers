import { Link } from "react-router-dom";
import '../assets/css/NavBar.css'

export function NavBar() {
	return (
		<nav className="bg-primary rounded-b shadow-lg mb-4">
		<div className="navbar">
		  <div className="navbar-left">
			<ul className="menu menu-horizontal flex flex-wrap">
			  <li className="navBarItem">
				<Link to="/">About Me</Link>
			  </li>
			  <li className="navBarItem">
				<Link to="/Resume">Resume</Link>
			  </li>
			  <li className="navBarItem">
				<Link to="/Projects">Projects</Link>
			  </li>
			  <li className="navBarItem">
				<Link to="/Contact">Contact</Link>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
	);
}