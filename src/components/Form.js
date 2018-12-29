import React from 'react';
import styled from 'styled-components';

import FileUpload from './FileUpload';

const Container = styled.section`
  background-color: #ffffff;
  width: 50%;
`;

const Field = `
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  min-height: 3rem;
  line-height: 1.5;
  position: relative;
  vertical-align: top;
  border-color: #dbdbdb;
  box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
  max-width: 100%;
  width: 100%;
  align-items: center;
`;

const FormField = styled.div`
  margin: 1.5rem 0;

  label {
    margin: 0.5rem 0;
    display: block;
  }
`;

const Input = styled.input`
  ${Field}
`;

const TextArea = styled.textarea`
  ${Field}
`;

const SubmitButton = styled.button`
  background-color: #001dfb;
  color: #ffffff;
  padding: 1.2rem;
  cursor: pointer;
  width: 20rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  border: 0;
  box-shadow: none;
  margin: 4rem auto;
  display: block;
`;

const Form = () => (
  <Container>
    <h2
      css={`
        font-weight: 600;
        letter-spacing: 1.2;
        text-align: center;
      `}
    >
      APPLY NOW
    </h2>
    <form
      netlify
      css={`
        padding: 2rem 4rem;
      `}
    >
      <FormField>
        <label htmlFor="name">Name</label>
        <Input name="name" id="name" autoComplete="name" />
      </FormField>
      <FormField>
        <label htmlFor="email">Email</label>
        <Input name="email" id="email" type="email" autoComplete="email" />
      </FormField>
      <FormField>
        <label htmlFor="notice-period">Notice Period</label>
        <Input name="notice-period" id="notice-period" type="number" />
      </FormField>
      <FileUpload />
      <FormField>
        <label htmlFor="cover-letter">Cover Letter</label>
        <TextArea name="cover-letter" rows="8" />
      </FormField>
      <SubmitButton type="submit">Apply</SubmitButton>
    </form>
  </Container>
);

export default Form;
