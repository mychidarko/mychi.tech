import { ProjectGroupProps } from "./@types/ProjectGroup";

const ProjectGroup: React.FC<ProjectGroupProps> = ({ projects, group }) => {
	console.log(group, projects);

	return (
		<div className="project-group__container">
			<h2 className="project-group__title">{group}</h2>
			{projects.map((project, index) => (
				<div className="project-group__project" key={index}>
					<h4>{project.name}</h4>
					<p>{project.description}</p>
				</div>
			))}
		</div>
	);
};

export default ProjectGroup;
