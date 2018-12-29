import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import NakedList from '../utils/NakedList';
import Logo from '../images/logo.svg';
import media from '../utils/media';

const Nav = styled.nav`
  display: flex;
  justify-content: ${props => (props.logo ? 'space-between' : 'flex-end')};
  align-items: center;
  padding: 0 4rem;
  height: 6rem;
  background-color: #ffffff;

  ${media.tablet`
    justify-content: center;
  `}
`;

const NavList = styled(NakedList)`
  display: flex;

  ${media.tablet`
    display: none;
  `}
`;

const NavItems = styled.li`
  text-transform: uppercase;
  padding: 0 1rem;
  margin: 0 1rem;
`;

const StyledLogo = styled(Logo)`
  height: 2rem;
`;

const Header = ({ logo }) => (
  <Nav logo={logo}>
    {logo && (
      <Link to={'/'}>
        <StyledLogo />
      </Link>
    )}
    <NavList>
      <NavItems>About</NavItems>
      <NavItems>Careers</NavItems>
      <NavItems>Pricing</NavItems>
    </NavList>
  </Nav>
);

Header.defaultProps = {
  logo: false,
};

Header.propTypes = {
  logo: PropTypes.bool,
};

export default Header;
