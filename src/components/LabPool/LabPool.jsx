import { useParams } from "react-router";

import { labs } from "@/data/labs";
import LabCard from "@/components/LabCard/LabCard";

import styles from "./LabPool.module.css";

const LabPool = () => {
	const { category } = useParams();

	const categoryLabs = labs[category] || [];

	return (
		<main className={styles.labPool}>
			<h1>{category} Labs</h1>

			<div className={styles.grid}>
				{categoryLabs.map((lab) => (
					<LabCard key={lab.id} lab={lab} category={category} />
				))}
			</div>
		</main>
	);
};

export default LabPool;
