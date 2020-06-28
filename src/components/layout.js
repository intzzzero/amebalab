/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
  position: relative;
`

const Copyright = styled.p`
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.9em;
`

const GatsbyLink = styled.a`
  margin-left: 5px;
  font-size: 0.9em;
  line-height: 1.5rem;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.4);
`

const FooterContainer = styled.div`
  margin: 5vh 0;
  padding: 0;
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
`

const Footer = styled.footer`
  position: absolute;
  display: flex;
  justify-content: center;
  font-size: 0.8em;
  color: rgba(0, 0, 0, 0.4);
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
          <FooterContainer>
            <Footer>
              <Copyright>
              © {new Date().getFullYear()} codeAmeba, Built with
              {` `}
              </Copyright>
              <GatsbyLink href="https://www.gatsbyjs.org">Gatsby</GatsbyLink>
            </Footer>
          </FooterContainer>
        </Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
