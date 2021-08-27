import Head from "next/head";
import { useEffect, useState } from "react";
import { useGet } from "utils/hermes";
import { Project } from "pages/api/@types/projects";

import Loader from "components/Loader";
import TopNav from "components/TopNav";
import ProjectGroup from "components/pages/Projects/ProjectGroup";

export default function Projects() {
	const [response, loading, error] = useGet("/api/projects");
	const [projects, setProjects] = useState({});

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

			setProjects(projectList);
		}
	}, [response]);

	return (
		<div>
			<Head>
				<title>Projects - Mychi Darko</title>
			</Head>

			<main>
				<TopNav />

				<div className="page__content">
					{loading && <Loader height="50vh" />}
					{!loading &&
						projects &&
						Object.keys(projects).map((group) => (
							<ProjectGroup
								key={group}
								projects={projects[group]}
								group={group}
							/>
						))}
				</div>
			</main>
		</div>
	);
}
