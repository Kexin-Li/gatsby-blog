import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Nav from '../components/Nav'

class BlogPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Thoughts" />
        <header>Thoughts</header>
        <Nav />
        <div>😳</div>
      </Layout>
    )
  }
}

export default BlogPage
