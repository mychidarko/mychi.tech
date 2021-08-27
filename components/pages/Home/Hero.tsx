import Particles from 'react-particles-js';
import { contentCard } from 'styles/components/cards.styles';
import heroStyles from "styles/components/hero.styles";

import Image from 'next/image'

const Hero = () => {
	return (
		<div css={heroStyles()} className="flex flex:center-between px-md-down:10">
			<div className="flex flex:center-between h:100 hero-content" css={contentCard()}>
				<div className="hero-text w:50">
					<h4 className="mb:_2">HI, MY NAME'S <br /><span>MICHAEL DARKO</span></h4>
					<p>
						I'm a full-stack software engineer with specialized experience in web application development and systems development, obsessed with functionality driven design and always open to learning 🚀
					</p>
				</div>
				<img src="/mychi1.jpeg" alt="" className="hero-img w:40" />
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
