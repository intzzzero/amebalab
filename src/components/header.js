import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"

const Content = styled.div`
  padding: 1rem 1.0875rem;
  font-size: 1rem;
  position: fixed;
  z-index: 100;
  width: 100vw;
  background-color: rgba(28, 32, 34, 0.7);
  display: flex;
  align-content: center;
  justify-content: center;
`

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.9);
  margin-left: 8vw;
  text-decoration: none;
  display: inline-block;
  position: relative;
  font-size: 1rem;

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

const HomeLink = styled(NavLink)`
  margin-left: 0;
  font-size: 1rem;
`

const SiteHeader = styled.header`
  background: transparent;
  height: 50px;
  display: flex;
  align-content: center;
  justify-content: center;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Content>
      <p>
        <HomeLink to="/">{siteTitle}</HomeLink>
        <NavLink to="/category">Category</NavLink>
        <NavLink to="/about">About</NavLink>
      </p>
    </Content>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
