import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Form from '../components/Form';
import SEO from '../components/seo';

const Title = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 1.2;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0;
`;

const Container = styled.div`
  margin: 2rem 4rem;
  display: flex;
`;

const Content = styled.div`
  margin: 2rem;
  padding: 2rem;
  width: 50%;
  text-align: justify;
  background-color: #ffffff;

  h3 {
    font-weight: 600;
    font-size: 1.8rem;
  }
`;

const Post = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <header
        css={`
          text-align: center;
          margin: 4rem 0;
        `}
      >
        <Title>{post.frontmatter.title}</Title>
        <sub>Posted on {post.frontmatter.date}</sub>
      </header>
      <Container>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        <Form />
      </Container>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query JobPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        dept
        location
      }
    }
  }
`;
