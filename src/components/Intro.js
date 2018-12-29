import React from 'react';
import styled from 'styled-components';

import GraphicsEl from '../images/graphics.svg';
import Logo from '../images/logo.svg';
import media from '../utils/media';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: calc(100vh - 6rem);
  align-items: flex-end;
  padding: 1rem 5rem;
  flex: 0.5;
  background-color: #ffffff;

  ${media.tablet`
    padding: 1rem 2rem;
    min-height: calc(80vh - 6rem);
  `}
`;

const Presentation = styled.div`
  ${media.phone`
    display: none;
  `}
`;

const Content = styled.div`
  text-align: center;
  align-self: center;
  flex: 1;
`;

const ActionButton = styled.button`
  background-color: #ff4133;
  color: #ffffff;
  padding: 1.2rem;
  cursor: pointer;
  width: 20rem;
  font-size: 1.7rem;
  text-transform: uppercase;
  border: 0;
  box-shadow: none;
  font-weight: 500;
  margin-top: 12rem;

  ${media.phone`
    margin-top: 4rem;
  `}
`;

const Intro = () => (
  <Container>
    <Presentation>
      <GraphicsEl />
    </Presentation>
    <Content>
      <Logo />
      <p>Change the World. One Step at a Time.</p>
      <ActionButton>Join Us</ActionButton>
    </Content>
  </Container>
);

export default Intro;
