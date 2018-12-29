import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Accordion from './Accordion';
import media from '../utils/media';

const Container = styled.section`
  background-color: #fcfcfc;
  min-height: 60vh;
  padding: 3rem 3rem 8rem;
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

  ${media.tablet`
    width: 100%;
  `}
`;

const Listing = ({ data }) => (
  <Container>
    <Title>Find your Spot</Title>
    <Content>
      <Accordion data={data} />
    </Content>
  </Container>
);

Listing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      fieldValue: PropTypes.string.isRequired,
      totalCount: PropTypes.number.isRequired,
    })
  ),
};

export default Listing;
