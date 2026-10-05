import { Link } from "react-router";
import styles from "./LabCard.module.css";

const LabCard = ({ lab, category }) => {
	return (
		<Link to={`/labs/${category}/${lab.id}`} className={styles.card}>
			<h2>{lab.title}</h2>
			<p>{lab.description}</p>
		</Link>
	);
};

export default LabCard;
