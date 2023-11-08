import { Link } from "react-router-dom";
import '../assets/css/NavBar.css'

export function NavBar() {
	return (
		<nav className="bg-primary rounded-b shadow-lg mb-4">
			<div className="navbar">
				<div className="navbar-left">
					<ul className="menu menu-horizontal flex flex-row">
						<li><Link to="/" className="navBarButton">About Me</Link></li>
						<li><Link to="/Resume" className="navBarButton">Resume</Link></li>
						<li><Link to="/Projects" className="navBarButton">Projects</Link></li>
						<li><Link to="/Contact" className="navBarButton">Contact</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}