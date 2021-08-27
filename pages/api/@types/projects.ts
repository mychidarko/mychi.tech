export interface Project {
	name: string;
	image?: string;
	description: string;
	group: "random" | "opensource" | "web" | "mobile" | "design";
	tags?: string[];
	links?: ProjectMeta[];
	meta?: ProjectMeta[];
};

export interface ProjectMeta {
	name: string;
	value: string;
};
