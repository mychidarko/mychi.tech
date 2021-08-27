import Head from "next/head";
// import Particles from 'react-particles-js';

import TopNav from "components/TopNav";
import Hero from "components/pages/Home/Hero";
import { contentCard } from "styles/components/cards.styles";

export default function Home() {
	return (
		<div className="page">
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
				<TopNav />
				<Hero />

				<div
					css={{ paddingLeft: "calc(15% + 0px)", paddingRight: "calc(15% + 0px)" }}
					className="mx:auto w:auto flex-col flex:center-all px-md-down:10"
				>
					<h4>What I do ✨</h4>

					<div className="flex w:100">
						<div
							css={contentCard()}
							className="flex flex:center-between px:_5 py:_8 mt:_4 w:100"
						>
							Mozilla
						</div>
						<div
							css={contentCard()}
							className="flex flex:center-between px:_5 py:_8 mt:_4 w:100 ml:_2"
						>
							Mozilla
						</div>
						<div
							css={contentCard()}
							className="flex flex:center-between px:_5 py:_8 mt:_4 w:100 ml:_2"
						>
							Mozilla
						</div>
					</div>
				</div>
				{/* <Particles
					className="particles-container"
					params={{
						particles: {
							number: {
								value: 320,
								density: {
									enable: true,
									value_area: 1100,
								}
							},
							color: {
								value: '#fff'
							},
							size: {
								value: 1.7,
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
							}
						}
					}}
				/> */}
			</main>
		</div>
	);
}
