import Head from "next/head";
// import Particles from 'react-particles-js';

import TopNav from "components/TopNav";
import Hero from "components/pages/Home/Hero";
import { contentCard } from "styles/components/cards.styles";
import contactStyles from "styles/components/contact.styles";
import { Airplay, GitHub, GitPullRequest, Instagram, Linkedin, PenTool, Smartphone, Twitter } from "react-feather";
import { homeStyles } from "styles/pages/home.styles";

export default function Home() {
	return (
		<div className="page" css={homeStyles()}>
			<Head>
				<title>Michael Darko-Duodu</title>
				<meta
					name="description"
					content="Full stack software engineer, business student and arts lover."
				/>
				<meta
					name="keywords"
					content="Michael, Michael Darko, Darko-Duodu, Mychi Darko, Leaf PHP, React Glass, Michael Darko-Duodu, Qodehub, Bezo money, BezoMoney"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<TopNav page="home" />
				<Hero />

				<div
					css={{ paddingLeft: "calc(15% + 0px)", paddingRight: "calc(15% + 0px)" }}
					className="mx:auto w:auto flex-col flex:center-all px-md-down:10 h:100vh"
				>
					<h4>What I do ✨</h4>

					<div className="flex flex:center-between w:100 mt:_2 skills">
						<div
							css={contentCard()}
							className="px:_4 py:_4 pl:_5 skill mt:_2"
						>
							<b className="flex flex:center-start">
								<Airplay />
								<span className="ml:_1">FRONTEND</span>
							</b>

							<ul className="mt:_3 ml:_2">
								<li>CSS, SASS, Emotion</li>
								<li>JS, TS, jQuery, React, Vue</li>
								<li>Bootstrap, Materialize, MDL, AntD</li>
								<li>Gulp, Grunt, Webpack, Parcel, Babel</li>
							</ul>
						</div>
						<div
							css={contentCard()}
							className="px:_4 py:_4 pl:_5 skill mt:_2"
						>
							<b className="flex flex:center-start">
								<GitPullRequest />
								<span className="ml:_1">BACKEND</span>
							</b>

							<ul className="mt:_3 ml:_2">
								<li>NodeJS, Express, Nest JS</li>
								<li>PHP, Laravel, Slim, Leaf</li>
								<li>AWS, Azure, Render, Digital Ocean</li>
								<li>MongoDB, MySQL</li>
							</ul>
						</div>
						<div
							css={contentCard()}
							className="px:_4 py:_4 pl:_5 skill mt:_2"
						>
							<b className="flex flex:center-start">
								<Smartphone />
								<span className="ml:_1">APP DEV</span>
							</b>

							<ul className="mt:_3 ml:_2">
								<li>Dart, Flutter</li>
								<li>JavaScript, React Native, Ionic</li>
								<li>JavaScript, Electron</li>
							</ul>
						</div>
						<div
							css={contentCard()}
							className="px:_4 py:_4 pl:_5 skill mt:_2"
						>
							<b className="flex flex:center-start">
								<PenTool />
								<span className="ml:_1">DESIGN</span>
							</b>

							<ul className="mt:_3 ml:_2">
								<li>Adobe Illustrator</li>
								<li>Affinity Desgner</li>
								<li>Figma</li>
							</ul>
						</div>
					</div>
				</div>

				<div
					css={{ paddingLeft: "calc(15% + 0px)", paddingRight: "calc(15% + 0px)" }}
					className="contact__section flex flex:center-between h:100vh"
				>
					<div
						css={{...contentCard(), ...contactStyles() }}
						className="px:_9 py:_10 w:100 flex-col flex:center-between"
					>
						<b>Connect with me <span>@mychidarko</span></b>

						<div className="flex flex:center-between w:60 mt:_7">
							<a href="https://twitter.com/mychidarko" target="_blank">
								<Twitter size={45} />
							</a>
							<a href="https://github.com/mychidarko" target="_blank">
								<GitHub size={45} />
							</a>
							<a href="https://linkedin.com/in/mychidarko" target="_blank">
								<Linkedin size={45} />
							</a>
							<a href="https://instagram.com/mychidarko" target="_blank">
								<Instagram size={45} />
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
