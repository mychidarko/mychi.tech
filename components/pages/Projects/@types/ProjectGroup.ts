import { Project } from "pages/api/@types/projects";

export interface ProjectGroupProps {
	group: string;
	projects: Project[];
};
