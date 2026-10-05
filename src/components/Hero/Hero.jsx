import profileImg from "@/assets/images/profile-image.png";
import devIcon from "@/assets/icons/dev-icon.png";
import linkedinIcon from "@/assets/icons/linkedin-icon.png";
import ftIcon from "@/assets/icons/42-icon.svg";
import styles from "./Hero.module.css";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.game}>
				<canvas id="game-canvas"></canvas>

				<div className={styles.gameControls}>
					<span>A D / ← → Move</span>
					<span>Space Jump</span>
				</div>
			</div>

			<div className={styles.profile}>
				<img
					src={profileImg}
					className={styles.profileImgStyle}
					alt="Illustration of me"
				/>

				<div className={styles.profileLinks}>
					<a
						className={styles.profileLink}
						href="https://yuak42.github.io"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={ftIcon} alt="42 profile" />
					</a>

					<a
						className={styles.profileLink}
						href="https://www.linkedin.com/in/yunus-emre-ak-83b103249"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={linkedinIcon} alt="LinkedIn profile" />
					</a>

					<a
						className={styles.profileLink}
						href="https://dev.to/yunemak"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={devIcon} alt="DEV profile" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
