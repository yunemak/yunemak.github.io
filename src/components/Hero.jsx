const Hero = () => {
	return (
		<section className="hero-section">
			<div className="hero-game">
				<canvas id="game-canvas"></canvas>

				<div className="game-controls">
					<span>A D / ← → Move</span>
					<span>Space Jump</span>
				</div>
			</div>

			<div className="hero-img">
				<img src="/img/profile.png" alt="Illustration of me" />

				<div className="hero-links">
					<a
						className="account-link"
						href="https://yuak42.github.io"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/img/42-logo.png" alt="42 profile" />
					</a>

					<a
						className="account-link"
						href="https://www.linkedin.com/in/yunus-emre-ak-83b103249"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/img/linkedin.png" alt="LinkedIn profile" />
					</a>

					<a
						className="account-link"
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
