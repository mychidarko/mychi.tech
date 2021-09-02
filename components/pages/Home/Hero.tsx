import { GitHub, Instagram, Linkedin, Twitter } from 'react-feather';
import Particles from 'react-particles-js';
import { contentCard } from 'styles/components/cards.styles';
import heroStyles from "styles/components/hero.styles"

const Hero = () => {
	return (
		<div
			css={heroStyles()}
			data-aos="fade-in"
			className="flex flex:center-between px-md-down:10"
		>
			<div className="flex flex:center-between h:100 hero-content" css={contentCard()}>
				<div className="hero-text w:50">
					<h4
						className="mb:_2"
						data-aos="fade-up"
					>
						HI, MY NAME'S <br /><span>MICHAEL DARKO</span>
					</h4>
					<p data-aos="fade-up" data-aos-delay="200">
						I'm a full-stack software engineer with specialized experience in web application development and systems development, obsessed with functionality driven design and always open to learning 🚀
					</p>
					<div
						data-aos="fade-up"
						data-aos-delay="400"
						className="flex flex:center-between w:40 mt:_4"
					>
						<a href="https://twitter.com/mychidarko" target="_blank">
							<Twitter size={20} />
						</a>
						<a href="https://github.com/mychidarko" target="_blank">
							<GitHub size={20} />
						</a>
						<a href="https://linkedin.com/in/mychidarko" target="_blank">
							<Linkedin size={20} />
						</a>
						<a href="https://instagram.com/mychidarko" target="_blank">
							<Instagram size={20} />
						</a>
					</div>
				</div>
				<img
					src="/me.jpg"
					alt=""
					className="hero-img w:40"
					data-aos="fade-in"
					data-aos-delay="200"
				/>
				<Particles
					className="hero-particles"
					params={{
						particles: {
							number: {
								value: 320,
								density: {
									enable: true,
									value_area: 3100,
								}
							},
							color: {
								value: '#fff'
							},
							size: {
								value: 2,
								random: true,
								anim: {
									enable: true,
									speed: 3,
								}
							},
							line_linked: {
								enable: false,
							},
							move: {
								speed: 0.2,
							},
							wobble: {
								enable: true,
							},
						}
					}}
				/>
			</div>
		</div>
	);
};

export default Hero;
