import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: #fcfcfc;
  min-height: 60vh;
  padding: 3rem;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.2;
  font-size: 2.8rem;
`;

const Content = styled.div`
  background-color: #ffffff;
  width: 70%;
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
`;

const Listing = () => (
  <Container>
    <Title>Find your Spot</Title>
    <Content />
  </Container>
);

export default Listing;
