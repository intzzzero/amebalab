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
          <p>
            안녕하세요, 웹 개발자 INTZERO입니다.
            <br />
            삶에서도 코드에서도 통제할 수 없는 변수의 최소화를 지향합니다.
            <br />
            현재는
            <a href="https://apps.apple.com/app/id1483177281" target="_blank">
              '펫프라이스'
            </a>
            라는 스타트업에서 동명의 서비스를 만들고 알리는 중이며, 최근 사이드
            프로젝트로 WebRTC 기반의
            <a
              href="https://apps.apple.com/kr/app/id1592413495"
              target="_blank"
            >
              '코디톡'
            </a>
            이라는 서비스를 만들어 출시하였습니다.
          </p>
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
