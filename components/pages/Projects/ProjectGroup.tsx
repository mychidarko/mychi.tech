import { contentCard, projectCard } from "styles/components/cards.styles";
import { ProjectGroupProps } from "./@types/ProjectGroup";

const ProjectGroup: React.FC<ProjectGroupProps> = ({ projects, group }) => {
	return (
		<div className="project-group__container">
			<h2 className="project-group__title">{group}</h2>
			<div className="project-group__list">
				{projects.map((project, index) => (
					<div
						key={index}
						css={{ ...contentCard(), ...projectCard(project.image) }}
						className="project-group__project p:_4"
					>
						<h4>{project.name}</h4>
						<p>{project.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectGroup;
