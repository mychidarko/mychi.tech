import Link from "next/link";
import { useRouter } from "next/router";
import { Menu } from "react-feather";
import Modal, { modal } from "react-ts-modal";
import { contentCard } from "styles/components/cards.styles";
import topNavStyles from "styles/components/topnav.styles";
import theme from "styles/theme";
import useTopNav from "utils/hooks/useTopNav";

export default function TopNav() {
	const router = useRouter();
	const { active, hidden } = useTopNav({
		scrollEffects: true,
		hideOnScroll: true,
	});

	const links = [
		{ name: "Home", path: "/" },
		{ name: "Projects", path: "/projects" },
		{ name: "Blog", path: "/blog" },
	];

	return (
		<nav
			css={topNavStyles({ active, hidden })}
			className={`
				flex flex:center-between py:_2
				position:fixed top:0 left:0 h:_5
			`}
		>
			<div className="topnav__container flex flex:center-between w:100">
				<Link href="/">
					<h3 className="topnav__logo cursor:pointer">Mychi.</h3>
				</Link>
				<Menu onClick={() => modal.show("nav-menu")} className="topnav__menu cursor:pointer" size={25} />
			</div>

			<Modal
				closeButton={false}
				name="nav-menu"
				css={{ ".rjsm__modal": { background: theme.colors.blueGray[900], borderRadius: 24 } }}
			>
				<div className="px:10 py:_2">
					{links.map((link) => (
						<Link href={link.path} key={link.path}>
							<div
								className={`topnav__link cursor:pointer my:_2 ${
									router.pathname === link.path ? "-active" : ""
								}`}
							>
								{link.name}
							</div>
						</Link>
					))}
				</div>
			</Modal>
		</nav>
	);
}
