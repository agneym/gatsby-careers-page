import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 10px;
  }
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    font-size: 1.6rem;
    color: rgba(0, 0, 0, 0.7);
    background-color: #fcfcfc;
  }
`;

const Layout = ({ location, children }) => (
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
        <Header logo={!!location} />
        {children}
        <Footer />
        <GlobalStyles />
      </>
    )}
  />
);

Layout.defaultProps = {
  location: null,
};

Layout.propTypes = {
  location: PropTypes.any,
  children: PropTypes.node.isRequired,
};

export default Layout;
