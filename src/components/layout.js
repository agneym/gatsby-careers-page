import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from "styled-components";

import Header from "./Header";

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 10px;
  }
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    font-size: 1.6rem;
    color: rgba(0, 0, 0, 0.7);
  }
`;

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
        <Header />
        {children}
        <footer>
          © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        <GlobalStyles />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
