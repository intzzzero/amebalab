import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
  transform: rotate(25deg);
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
  overflow: hidden;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.6);
`

const NameHeader = styled.h1`
  font-size: 5rem;
  margin-bottom: 0;
  padding: 0 100vw;
  background-color: rgba(220, 255, 0, 1);
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <NameHeader><i>{data.site.siteMetadata.title}</i></NameHeader>
          <Description>{data.site.siteMetadata.subtitle}</Description>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
