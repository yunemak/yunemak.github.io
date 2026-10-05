import { labCategories } from "@/data/labCategories";
import LabCategoryCard from "@/components/LabCategoryCard/LabCategoryCard.jsx";
import styles from "./Labs.module.css";

const Labs = () => {
	return (
		<section className={styles.labs}>
			{labCategories.map((category) => (
				<LabCategoryCard
					key={category.path}
					title={category.title}
					image={category.image}
					path={category.path}
				/>
			))}
		</section>
	);
};

export default Labs;
