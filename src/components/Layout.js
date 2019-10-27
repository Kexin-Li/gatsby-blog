import React from 'react'
import { Link } from 'gatsby'
import Nav from './Nav'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    // let header

    // if (location.pathname === rootPath) {
    //   header = <h1>{title}</h1>
    // } else {
    //   header = (
    //     <h3>
    //       <Link to={`/`}>{title}</Link>
    //     </h3>
    //   )
    // }
    return (
      <div>
        {/* {header} */}
        {children}
        <footer>2019 © Kexin Li.</footer>
      </div>
    )
  }
}

export default Layout
