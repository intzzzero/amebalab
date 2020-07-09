import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Utterances from '../components/utterances';

const Content = styled.div`
	margin: 0 auto;
	max-width: 860px;
	padding: 1.45rem 1.0875rem;
	color: rgba(255, 255, 255, 0.9);
`;

const MarkedHeader = styled.h1`
	font-size: 1.7rem;
	color: rgba(28, 32, 34, 1);
	display: inline;
	/* border-radius: 1em 0 1em 0; */
	/* background-image: linear-gradient(
		-100deg,
		rgba(220, 255, 0, 0.15),
		rgba(220, 255, 0, 0.8) 100%,
		rgba(220, 255, 0, 0.25)
	); */
	background-color: rgba(220, 255, 0, 1);
`;

const HeaderDate = styled.h5`
	margin-top: 10px;
	color: rgba(255, 255, 255, 0.7);
`;

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
	a {
		text-decoration: none;
		position: relative;
		color: rgba(255, 255, 255, 0.9);

		background-image: linear-gradient(rgba(220, 255, 0, 0.8), rgba(220, 255, 0, 0.8));
		background-repeat: no-repeat;
		background-size: 100% 0.2em;
		background-position: 0 88%;
		transition: background-size 0.25s ease-in;
		&:hover {
			background-size: 100% 100%;
			color: rgba(28, 32, 34, 1);
		}
	}
`;

export default ({ data }) => {
	const post = data.markdownRemark;
	return (
		<Layout>
			<SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
			<Content>
				<MarkedHeader>{post.frontmatter.title}</MarkedHeader>
				<HeaderDate>
					{post.frontmatter.date} - {post.frontmatter.category} - {post.fields.readingTime.text}
				</HeaderDate>
				<MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
				<Utterances />
			</Content>
		</Layout>
	);
};

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			excerpt(pruneLength: 160)
			frontmatter {
				date(formatString: "DD MMMM, YYYY")
				path
				title
				category
			}
			fields {
				readingTime {
					text
				}
			}
		}
	}
`;
