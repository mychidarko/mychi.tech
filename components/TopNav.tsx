import Link from "next/link";
import topNavStyles from "styles/components/topnav.styles";
import useTopNav from "utils/hooks/useTopNav";

export default function TopNav({ page }) {
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
			className="flex:center-between py:_2 px-md-down:10 position:fixed top:0 left:0 h:_5"
		>
			<div className="topnav__container flex flex:center-between w:100">
				<h3>Mychi.</h3>
				<div className="topnav__links flex flex:center-between max-w:60">
					{links.map((link) => (
						<Link href={link.path} key={link.path}>
							<div className={`topnav__link ${page === link.name.toLowerCase() ? '-active' : ''}`}>{link.name}</div>
						</Link>
					))}
					<button className="ml:_5 px:_2 py:_1">Send Email</button>
				</div>
			</div>
		</nav>
	);
}
