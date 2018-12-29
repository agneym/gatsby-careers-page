import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import GraphicsEl from '../images/graphics.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `aviato`, `careers`]} />
    <GraphicsEl />
  </Layout>
)

export default IndexPage
