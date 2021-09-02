import Head from "next/head";
import { useGet } from "utils/hermes";

import Loader from "components/Loader";
import TopNav from "components/TopNav";
import ProjectGroup from "components/pages/Projects/ProjectGroup";
import { BlogPost } from "components/pages/Blog/@types";
import { blogCard, contentCard } from "styles/components/cards.styles";
import { blogStyles } from "styles/pages/blog.styles";
import { GitHub, Heart, Instagram, Linkedin, MessageCircle, Minimize, Twitter } from "react-feather";
import contactStyles from "styles/components/contact.styles";

export default function Projects() {
	const [response, loading, error] = useGet("https://dev.to/api/articles?username=mychi_darko");
	const blogs: BlogPost[] = response?.data;

	console.log(blogs);

	return (
		<div css={blogStyles()}>
			<Head>
				<title>Projects - Mychi Darko</title>
			</Head>

			<main>
				<TopNav page="blog" />

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
								Could not load blog posts. <br /> Please refresh the page to try again.
							</p>
						</div>
					)}
					{loading && <Loader height="50vh" />}
					{(!loading && blogs) && (
						<>
							<div
								css={contentCard()}
								className="px:_4 py:_4 mb:_10 flex blog__welcome"
							>
								{/* <img src="/me.jpg" alt="" className="hero-img" /> */}
								{/* <div className="content ml:_5"> */}
								<h4>Welcome to my blog! 📚</h4>
								{/* <p className="mb:_1">
									This is a little gallery documenting things I've tried, learnt, problems and cool stuff I've run into, some amazing code and some things I'm currently learning.
								</p>
								<p>
									Let me know if you have any questions or comments on any of these posts or just want to share some ideas 🚀
								</p>
							</div> */}
							</div>
							<div className="flex flex:center-between blog__list">
								{blogs.map((blog) => (
									<a
										key={blog.id}
										css={blogCard(blog.cover_image)}
										className="blog__post cursor:pointer"
										href={blog.url}
										target="_blank"
									>
										<div className="stats flex flex:center-between">
											<span className="stat flex flex:center-between hearts">
												<Heart />
												<span>{blog.positive_reactions_count}</span>
											</span>
											<span className="stat flex flex:center-between comments">
												<MessageCircle />
												<span>{blog.comments_count}</span>
											</span>
										</div>
										<div className="details">
											<h4 className="mb:_2">{blog.title}</h4>
											<p>{blog.description}</p>
										</div>
										<div className="tags mt:_4">
											{blog.tag_list.map((tag) => (
												<span>#{tag}</span>
											))}
										</div>
									</a>
								))}
							</div>
						</>
					)}

					<div
						className="contact__section flex flex:center-between h:75vh"
					>
						<div
							css={{ ...contentCard(), ...contactStyles() }}
							className="px:_9 py:_10 w:100 flex-col flex:center-between"
						>
							<b>Connect with me <span>@mychidarko</span></b>

							<div className="flex flex:center-between w:60 mt:_7">
								<a href="https://twitter.com/mychidarko" target="_blank">
									<Twitter size={45} />
								</a>
								<a href="https://github.com/mychidarko" target="_blank">
									<GitHub size={45} />
								</a>
								<a href="https://linkedin.com/in/mychidarko" target="_blank">
									<Linkedin size={45} />
								</a>
								<a href="https://instagram.com/mychidarko" target="_blank">
									<Instagram size={45} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
