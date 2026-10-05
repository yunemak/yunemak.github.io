import { NavLink } from "react-router";

const Navbar = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink className="menu-link" to="/">
							Home
						</NavLink>
					</li>

					<li>
						<NavLink className="menu-link" to="/docs">
							Docs
						</NavLink>
					</li>

					<li>
						<NavLink className="menu-link" to="/about">
							About
						</NavLink>
					</li>

					<li>
						<NavLink className="menu-link" to="/projects">
							Projects
						</NavLink>
					</li>

					<li>
						<NavLink className="menu-link" to="/labs">
							Labs
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
