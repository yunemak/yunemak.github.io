import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar.jsx";
import styles from "./Layout.module.css";

const Layout = () => {
	return (
		<div className={styles.root}>
			<Navbar />

			<Outlet />

			<footer>
				<p>yunemak</p>
			</footer>
		</div>
	);
};

export default Layout;
