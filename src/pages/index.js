import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
  color: rgba(255, 255, 255, 0.9);
`

const ArticleDate = styled.h5`
  display: inline;
  color: rgba(255, 255, 255, 0.7);
`

const MarkerHeader = styled.h3`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  display: inline-block;
  position: relative;
  font-size: 1.2rem;
  margin-top: 1.8rem;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    padding-top: 10px;
    bottom: 0;
    left: 0;
    background-color: rgba(220, 255, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const UpdateText = styled.div`
  font-size: 0.7rem;
  font-weight: 400;
  color: rgba(220, 255, 0, 0.8);
`

const ReadingTime = styled.h5`
  display: inline;
  color: rgba(255, 255, 255, 0.7);
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Content>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => {
            const rawDate = node.frontmatter.rawDate
            const date = new Date(rawDate)
            return date < new Date()
          })
          .map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <MarkerHeader>{node.frontmatter.title} </MarkerHeader>
                <div>
                  <ArticleDate>{node.frontmatter.date}</ArticleDate>
                  <ReadingTime> - {node.fields.readingTime.text}</ReadingTime>
                  {node.frontmatter.date !== node.frontmatter.update && (
                    <UpdateText>
                      {"💡 updated in " + node.frontmatter.update}
                    </UpdateText>
                  )}
                </div>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___update], order: [DESC] }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            update(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
