import { NavLink } from "react-router";
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.ul}>
					<li className={styles.li}>
						<NavLink className={styles.menuLink} to="/">
							Home
						</NavLink>
					</li>

					<li className={styles.li}>
						<NavLink className={styles.menuLink} to="/docs">
							Docs
						</NavLink>
					</li>

					<li className={styles.li}>
						<NavLink className={styles.menuLink} to="/about">
							About
						</NavLink>
					</li>

					<li className={styles.li}>
						<NavLink className={styles.menuLink} to="/projects">
							Projects
						</NavLink>
					</li>

					<li className={styles.li}>
						<NavLink className={styles.menuLink} to="/labs">
							Labs
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
