import { Outlet } from "react-router";
import Navbar from "./Navbar.jsx";

const Layout = () => {
	return (
		<>
			<Navbar />

			<Outlet />

			<footer>
				<p>yunemak</p>
			</footer>
		</>
	);
};

export default Layout;
