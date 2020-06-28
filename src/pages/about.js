import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Content = styled.div`
	margin: 0 auto;
  height: 80vh;
	max-width: 860px;
	padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProfileImg = styled.img`
  max-width: 300px;
  border-radius: 50%;
`;

const TextWrapper = styled.div`
  p {
    font-size: 0.8rem;
  }
`;

const SnsLinks = styled.div`
  font-size: 0.8rem;
  margin-top: 3vh;

	a {
    margin: 5px;
		text-decoration: none;
		position: relative;

		background-image: linear-gradient(rgba(220, 255, 0, 0.8), rgba(220, 255, 0, 0.8));
		background-repeat: no-repeat;
		background-size: 100% 0.2em;
		background-position: 0 88%;
		transition: background-size 0.25s ease-in;
		&:hover {
			background-size: 100% 88%;
		}
	}
`

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="About" />
			<Content>
      <ProfileImg src="https://avatars2.githubusercontent.com/u/48628740?s=460&u=efdd1063e3824078a65e068bfae89fb4a63e8344&v=4" />
			<TextWrapper>
        <p>주관적 생각과 객관적 정보의 아카이브</p>
      </TextWrapper>
      <SnsLinks>
        <a href="https://github.com/codeAmeba">Github</a>
        <a href="https://www.instagram.com/aprilgreenery/">Instagram</a>
        <a href="mailto:aprilgreenery@gmail.com">Email</a>
        <a href="https://codeameba.github.io/front-end-practice/">Practice</a>
      </SnsLinks>
      </Content>
		</Layout>
	);
};

export default IndexPage;

