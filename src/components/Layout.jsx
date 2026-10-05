import { Link, Outlet } from "react-router";

const Layout = () => {
	return (
		<>
			<header>
				<nav>
					<Link to="/">Home</Link>
				</nav>
			</header>

			<Outlet />

			<footer>
				<p>yunemak</p>
			</footer>
		</>
	);
};

export default Layout;
