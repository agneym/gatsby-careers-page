import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NakedList from '../utils/NakedList';
import Logo from '../images/logo.svg';

const Nav = styled.nav`
  display: flex;
  justify-content: ${props => (props.logo ? 'space-between' : 'flex-end')};
  align-items: center;
  padding: 0 4rem;
  height: 6rem;
  background-color: #ffffff;
`;

const NavList = styled(NakedList)`
  display: flex;
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
    {logo && <StyledLogo />}
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
