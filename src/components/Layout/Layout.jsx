import { Outlet } from "react-router";
import Navbar from "@/components/Navbar/Navbar.jsx";
import Footer from "@/components/Footer/Footer";

import styles from "./Layout.module.css";

const Layout = () => {
	return (
		<div className={styles.root}>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
