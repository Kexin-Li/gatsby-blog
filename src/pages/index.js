import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Nav from '../components/Nav'

class AboutPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Kexin Li" />
        <header>Kexin Li</header>
        <Nav />
        <div>☺️</div>
      </Layout>
    )
  }
}

export default AboutPage
