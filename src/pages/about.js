import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.9);
`
const ImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(80, 80, 80, 0.8);
  border-radius: 50%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-top: 1.5rem;
`

const ProfileImg = styled.img`
  width: 100%;
  height: auto;
`

const TextWrapper = styled.div`
  max-width: 440px;
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.8rem;
    text-align: left;
  }
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
          <ProfileImg src="https://avatars.githubusercontent.com/u/48628740?v=4" />
        </ImageWrapper>
        <TextWrapper>
          <h3>
            <i>주관적 생각과 객관적 정보의 아카이브</i>
          </h3>
          <ul>
            <li>독서보다는 도서수집을 좋아하며 수집한 책 중 골라 읽습니다.</li>
            <li>분야를 막론하고 새로운 것에 흥미를 느낍니다.</li>
            <li>
              디테일한 계획보다는 리소스와 목표만 주어지는 것을 좋아합니다.
            </li>
          </ul>
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
          <a href="https://intzzzero.myportfolio.com/" target="_blank">
            Photography
          </a>
        </SnsLinks>
      </Content>
    </Layout>
  )
}

export default IndexPage
