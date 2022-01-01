import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import profileImg from "../images/kakao_profile.jpeg"

const Content = styled.div`
  margin: 0 auto;
  height: 80vh;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.9);
`
const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid rgba(80, 80, 80, 1);
  border-radius: 50%;
  margin-bottom: 2rem;
`

const ProfileImg = styled.img`
  width: 100%;
  height: auto;
`

const TextWrapper = styled.div`
  h3 {
    font-size: 0.9rem;
  }
`

const SnsLinks = styled.div`
  font-size: 0.9rem;
  margin-top: 3vh;

  a {
    margin: 5px;
    text-decoration: none;
    position: relative;
    color: rgba(255, 255, 255, 0.9);

    background-image: linear-gradient(
      rgba(220, 255, 0, 0.8),
      rgba(220, 255, 0, 0.8)
    );
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 100%;
      color: rgba(28, 32, 34, 1);
    }
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Content>
        <ImageWrapper>
          <ProfileImg src={profileImg} />
        </ImageWrapper>
        <TextWrapper>
          <h3>
            <i>주관적 생각과 객관적 정보의 아카이브</i>
          </h3>
        </TextWrapper>
        <SnsLinks>
          <a href="https://github.com/intzzzero" target="_blank">
            Github
          </a>
          <a href="https://www.instagram.com/intzzzero/" target="_blank">
            Instagram
          </a>
          <a href="mailto:intzzzero@gmail.com" target="_blank">
            Email
          </a>
          <a
            href="https://intzzzero.github.io/front-end-practice/"
            target="_blank"
          >
            Practice
          </a>
          <a href="https://intzzzero.github.io/portfolio/" target="_blank">
            Portfolio
          </a>
        </SnsLinks>
      </Content>
    </Layout>
  )
}

export default IndexPage
