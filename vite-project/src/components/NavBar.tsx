import { Link } from "react-router-dom";

export function NavBar() {
	return (
		<nav className="bg-primary rounded-b shadow-lg mb-4">
			<div className="navbar justify-between">
				<div className="navbar-left">
					<ul className="menu menu-horizontal flex items-center">
						<li><Link to="/" className="nav-link text-white mr-4 no-underline hover:bg-neutral">About Me</Link></li>
						<li><Link to="/Resume" className="nav-link text-white mr-4 no-underline hover:bg-neutral">Resume</Link></li>
						<li><Link to="/Projects" className="nav-link text-white mr-4 no-underline hover:bg-neutral">Projects</Link></li>
						<li><Link to="/Contact" className="nav-link text-white mr-4 no-underline hover:bg-neutral">Contact</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}