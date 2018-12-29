import React from 'react';

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Intro from '../components/Intro';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `aviato`, `careers`]} />
    <Intro />
  </Layout>
)

export default IndexPage
