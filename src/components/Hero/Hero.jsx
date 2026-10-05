import profileImg from "@/assets/profile.png";
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
						className={styles.accountLink}
						href="https://yuak42.github.io"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/img/42-logo.png" alt="42 profile" />
					</a>

					<a
						className={styles.accountLink}
						href="https://www.linkedin.com/in/yunus-emre-ak-83b103249"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/img/linkedin.png" alt="LinkedIn profile" />
					</a>

					<a
						className={styles.accountLink}
						href="https://dev.to/yunemak"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/img/dev-logo.png" alt="DEV profile" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
