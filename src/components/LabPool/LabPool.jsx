import { useParams } from "react-router";
import styles from "./LabPool.module.css";

const LabPool = () => {
	const { category } = useParams();

	return (
		<main className={styles.labPool}>
			<h1>{category} Labs</h1>
		</main>
	);
};

export default LabPool;
