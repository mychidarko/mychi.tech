import { success } from "config/api/response";
import { Project } from "./@types/projects";

export default (req, res) => {
	const projects: Project[] = [
		{
			name: "Leaf PHP",
			image: "https://opengraph.githubassets.com/5d042ac0ac3c8592e46b1c17196c738b695e7d3d54eb3eb8c66fdfee21775650/leafsphp/leaf",
			description:
				"Leaf PHP consists of frameworks and libraries that help you create clean, simple but powerful web apps and APIs quickly and easily.",
			group: "opensource",
			tags: ["opensource", "framework", "library", "php"],
			links: [
				{
					name: "View on GitHub",
					value: "https://github.com/leafsphp/",
				},
				{
					name: "View the docs",
					value: "https://leafphp.netlify.app",
				},
			],
			meta: [
				{ name: "First release", value: "14th October, 2019" },
				{ name: "Total Releases", value: "24" },
			],
		},
		{
			name: "React Glass",
			image: "https://opengraph.githubassets.com/5d042ac0ac3c8592e46b1c17196c738b695e7d3d54eb3eb8c66fdfee21775650/mychidarko/react-glass",
			description:
				"React Glass is a simple react js/ts boilerplate which focuses on providing a simple and pain-free developer experience.",
			group: "opensource",
			tags: [
				"opensource",
				"boilerplate",
				"javascript",
				"typescript",
				"scss",
			],
			links: [
				{
					name: "View TypeScript",
					value: "https://github.com/mychidarko/react-glass-ts",
				},
				{
					name: "View JavaScript",
					value: "https://github.com/mychidarko/react-glass",
				},
			],
			meta: [{ name: "First commit", value: "30th January, 2021" }],
		},
		{
			name: "React JS Modal",
			image: "https://opengraph.githubassets.com/5d042ac0ac3c8592e46b1c17196c738b695e7d3d54eb3eb8c66fdfee21775650/mychidarko/react-js-modal",
			description: "Create and manage react modals without the tears.",
			group: "opensource",
			tags: [
				"opensource",
				"library",
				"javascript",
				"typescript",
				"scss",
				"css",
			],
			links: [
				{
					name: "View on GitHub",
					value: "https://github.com/mychidarko/react-js-modal",
				},
				{
					name: "View on npm",
					value: "https://www.npmjs.com/package/react-ts-modal",
				},
			],
			meta: [{ name: "Stable version", value: "v1.1.0" }],
		},
		{
			name: "449 CSS",
			image: "https://opengraph.githubassets.com/5d042ac0ac3c8592e46b1c17196c738b695e7d3d54eb3eb8c66fdfee21775650/mychidarko/449.css",
			description:
				"CSS utility helper inspired by tailwind and bootstrap",
			group: "opensource",
			tags: ["opensource", "library", "scss"],
			links: [
				{
					name: "View on GitHub",
					value: "https://github.com/mychidarko/449.css",
				},
			],
		},
		{
			name: "Glass Router",
			image: "https://opengraph.githubassets.com/5d042ac0ac3c8592e46b1c17196c738b695e7d3d54eb3eb8c66fdfee21775650/mychidarko/glass-router",
			description:
				"✨ Glass router is a wrapper around react-router-dom which provides a clean and developer-friendly approach to routing in React.",
			group: "opensource",
			tags: ["opensource", "router", "library", "ts", "js"],
			links: [
				{
					name: "View on GitHub",
					value: "https://github.com/mychidarko/glass-router",
				},
			],
			meta: [{ name: "Collaborator", value: "@Console45 Cosmos Appiah" }],
		},
		{
			name: "Traveler San",
			image: "https://github.com/mychidarko/traveler-san/blob/master/flutter_03.png?raw=true",
			description: "Simple tourism app to learn flutter.",
			group: "random",
			tags: ["random", "mobile", "flutter", "dart"],
			links: [
				{
					name: "View on GitHub",
					value: "https://github.com/mychidarko/traveler-san",
				},
			],
		},
		{
			name: "Bitcart Web",
			image: "https://github.com/mychidarko/personal-reboot/blob/master/img/portfolio/bitcart-web.png?raw=true",
			description:
				"A clean, simple, refresh of bitcart's web app, built with React JS and Leaf API. Buy, sell and exchange crypto on Ghana's fastest crypto exchange, quickly and efficiently.",
			group: "web",
			tags: ["web", "react", "js", "leaf", "php"],
			links: [
				{
					name: "Make your transaction",
					value: "https://bitcartweb.netlify.app/",
				},
			],
			meta: [{ name: "status", value: "down" }],
		},
		{
			name: "Inventory Tracker",
			image: "https://github.com/mychidarko/personal-reboot/blob/master/img/portfolio/inventory.png?raw=true",
			description:
				"A simple inventory tracker app built for Mac, Windows and Linux with Electron JS. Keep tabs on your products, sell and remove, restock...",
			group: "random",
			tags: ["electron", "js", "desktop"],
			meta: [{ name: "Type", value: "Desktop App" }],
		},
		{
			name: "Changelly Integration",
			image: "https://github.com/mychidarko/personal-reboot/blob/master/img/portfolio/changelly-integration.png?raw=true",
			description:
				"A simple library to help you smoothly integrate changelly's API in just a few lines of code, usually 2-3 lines😅😅. Built entirely with PHP.",
			group: "opensource",
			tags: ["opensource", "library", "php"],
			meta: [{ name: "Built for", value: "Bitcart" }],
		},
		{
			name: "Block Caps",
			image: "https://github.com/mychidarko/personal-reboot/blob/master/img/portfolio/blockcaps.png?raw=true",
			description:
				"Website for Block Caps. Get live crypto currency prices in Ghanaian Cedis(GHS), US Dollars(USD) and Nigerian Niara(NGN). Built with JavaScript.",
			group: "web",
			tags: ["web", "js", "css"],
			links: [
				{
					name: "Compare crypto prices",
					value: "https://blockcaps.netlify.app/",
				},
			],
			meta: [{ name: "Supported currencies", value: "15" }],
		},
		{
			name: "Changer",
			image: "https://github.com/mychidarko/personal-reboot/blob/master/img/portfolio/changer.png?raw=true",
			description:
				"A simple Chrome extension to change the background of any website with 'e' it's URL.",
			group: "random",
			tags: ["random", "js"],
		},
		{
			name: "Portal Online",
			image: "https://github.com/mychidarko/personal-reboot/blob/master/img/portfolio/portal-online.png?raw=true",
			description:
				"A platform which allows you to link your mobile and crypto wallets togther, make transactions between them, send and receive cash.",
			group: "web",
			tags: ["pwa", "react", "js", "php", "api"],
			links: [
				{
					name: "View Preview",
					value: "https://portalonline.netlify.app/start",
				},
			],
			meta: [{ name: "Type", value: "PWA" }],
		},
	];

	res.status(200).json(success(projects));
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
