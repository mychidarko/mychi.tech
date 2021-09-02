import Head from "next/head";
import { useEffect, useState } from "react";
import { useGet } from "utils/hermes";
import { Project } from "pages/api/@types/projects";

import Loader from "components/Loader";
import TopNav from "components/TopNav";
import ProjectGroup from "components/pages/Projects/ProjectGroup";
import { contentCard } from "styles/components/cards.styles";
import { Minimize } from "react-feather";
import { projectsStyles } from "styles/pages/projects.styles";

export default function Projects() {
	const [response, loading, error] = useGet("/api/projects");
	const [projects, setProjects] = useState<Record<string, Project[]>>({});
	const [allProjects, setAllProjects] = useState<Record<string, Project[]>>({});

	useEffect(() => {
		console.log(response?.data, "response");

		if (response?.data?.status === "success") {
			const works: Project[] = response.data.data;
			const projectList: Record<string, Project[]> = {};

			works.forEach((work) => {
				if (!projectList[work.group]) {
					projectList[work.group] = [];
				}

				projectList[work.group].push(work);
			});

			setAllProjects(projectList);
			setProjects(projectList);
		}
	}, [response]);

	const filterGroups = (group: string) => {
		console.log("group", group);

		if (group === "all") {
			setProjects(allProjects);
			return;
		}

		setProjects({[group]: allProjects[group]});
	};

	return (
		<div css={projectsStyles()}>
			<Head>
				<title>Projects - Mychi Darko</title>
			</Head>

			<main>
				<TopNav page="projects" />

				<div className="page__content">
					{error && (
						<div
							css={contentCard()}
							className="px:_8 py:_8 mt:_10 blog__error"
						>
							<h4 className="flex flex:center-start mb:_2">
								<Minimize />
								<span className="ml:_1">Error</span>
							</h4>
							<p>
								Could not load projects. <br /> Please refresh the page to try again.
							</p>
						</div>
					)}
					{loading && <Loader height="50vh" />}
					{(!loading && projects) && (
						<div className="projects__list">
							<div className="flex project-group__tabs mb:_4">
								<div className="project__helper" onClick={() => filterGroups("all")}>All</div>
								{Object.keys(allProjects).map((group) => (
									<div
										key={`h-${group}`}
										onClick={() => filterGroups(group)}
										className="project__helper ml:_2"
									>
										{group}
									</div>
								))}
							</div>
							{Object.keys(projects).map((group) => (
								<ProjectGroup
									key={group}
									projects={projects[group]}
									group={group}
								/>
							))}
						</div>
					)}
				</div>
			</main>
		</div>
	);
}
