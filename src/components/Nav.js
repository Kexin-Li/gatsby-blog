import React from 'react'
import { Link } from 'gatsby'

function Nav() {
  return (
    <div>
      <Link to="/blog/">Blog</Link>
      {/* <Link to="/works">Works</Link> */}
      <Link to="/">About</Link>
    </div>
  )
}

export default Nav
