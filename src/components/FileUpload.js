import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const UploadArea = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  padding: 1rem 0;
  flex: 1;
  text-align: center;
`;

const FileUpload = () => (
  <Container>
    <label htmlFor="resume">
      <p>Resume</p>
      <UploadArea>
        <p>Upload File</p>
      </UploadArea>
      <input
        type="file"
        id="resume"
        css={`
          visibility: hidden;
          height: 0;
          overflow: hidden;
        `}
      />
    </label>
  </Container>
);

export default FileUpload;
