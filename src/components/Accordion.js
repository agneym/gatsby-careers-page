import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Accordion as AccordionComponent,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from './AccordionStyles';

const DeptTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
`;

const OpenPosts = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.4rem;
`;

const StyledAccordionItemTitle = styled(AccordionItemTitle)`
  cursor: pointer;
`;

const Accordion = ({ data }) => (
  <AccordionComponent>
    {data.map(item => (
      <AccordionItem key={item.fieldValue}>
        <StyledAccordionItemTitle>
          <DeptTitle>
            <span>{item.fieldValue}</span>
            <OpenPosts>{item.totalCount} OPEN POSITIONS &nbsp; ></OpenPosts>
          </DeptTitle>
        </StyledAccordionItemTitle>
        <AccordionItemBody>
          <p>Content</p>
        </AccordionItemBody>
      </AccordionItem>
    ))}
  </AccordionComponent>
);

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      fieldValue: PropTypes.string.isRequired,
      totalCount: PropTypes.number.isRequired,
    })
  ),
};

export default Accordion;
