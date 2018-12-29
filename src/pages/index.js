import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Intro from '../components/Intro';
import Listing from '../components/Listing';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `aviato`, `careers`]} />
    <Intro />
    <Listing />
  </Layout>
);

export default IndexPage;
