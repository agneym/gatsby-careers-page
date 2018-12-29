import React from 'react';
import styled from 'styled-components';

import NakedList from '../utils/NakedList';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
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

const Header = () => (
  <Nav>
    <NavList>
      <NavItems>About</NavItems>
      <NavItems>Careers</NavItems>
      <NavItems>Pricing</NavItems>
    </NavList>
  </Nav>
);

export default Header;
