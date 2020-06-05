import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const ProfileImg = styled.img`
  max-width: 280px;
  border-radius: 50%;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
`

const NameHeader = styled.h1`
  font-size: 3rem;
  margin-bottom: 0;
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
          <a href="/blog">
            <ProfileImg src="https://avatars2.githubusercontent.com/u/48628740?s=460&u=efdd1063e3824078a65e068bfae89fb4a63e8344&v=4"></ProfileImg>
          </a>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
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
