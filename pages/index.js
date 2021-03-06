import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1>
          Hi people
        </h1>
        <p>Welcome to your my new blog on js</p>
        <h2>I will try to share my passion for code </h2>

        <ul>
          <li>
            <Link to={prefixLink('/markdown/')}>Let's do a game </Link>
          </li>

        </ul>
      </div>
    )
  }
}
