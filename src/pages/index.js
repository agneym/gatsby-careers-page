import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Intro from '../components/Intro';
import Listing from '../components/Listing';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.group;
  return (
    <Layout>
      <SEO title="Careers" keywords={[`gatsby`, `aviato`, `careers`]} />
      <Intro />
      {posts && <Listing data={posts} />}
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { published: { eq: true } } }) {
      group(field: frontmatter___dept) {
        totalCount
        fieldValue
        edges {
          node {
            id
            excerpt(pruneLength: 160)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              published
            }
          }
        }
      }
    }
  }
`;
