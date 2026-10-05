import { Link } from "react-router";
import styles from "./LabCategoryCard.module.css";

const LabCategoryCard = ({ title, image, path }) => {
	return (
		<Link to={path} className={styles.categoryCard}>
			<img src={image} alt={title} className={styles.image} />
		</Link>
	);
};

export default LabCategoryCard;
