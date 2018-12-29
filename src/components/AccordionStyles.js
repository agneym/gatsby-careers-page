import styled from 'styled-components';
import {
  Accordion as AccordionComponent,
  AccordionItem as AccordionItemC,
  AccordionItemTitle as AccordionItemTitleC,
  AccordionItemBody as AccordionItemBodyC,
} from 'react-accessible-accordion';

export const Accordion = styled(AccordionComponent)`
  .accordion__body {
    display: block;
  }

  .accordion__body--hidden {
    display: none;
  }
`;

export const AccordionItem = styled(AccordionItemC)``;

export const AccordionItemTitle = styled(AccordionItemTitleC)``;

export const AccordionItemBody = styled(AccordionItemBodyC)``;
