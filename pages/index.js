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
          <li>
            <Link to={prefixLink('/react/')}>JSX (React components)</Link>
          </li>
          <li>
            <Link to={prefixLink('/coffee-react/')}>CJSX (Coffeescript React components)</Link>
          </li>
          <li>
            <Link to={prefixLink('/html/')}>HTML</Link>
          </li>
          <li>
            <Link to={prefixLink('/json/')}>JSON</Link>
          </li>
          <li>
            <Link to={prefixLink('/yaml/')}>YAML</Link>
          </li>
          <li>
            <Link to={prefixLink('/toml/')}>TOML</Link>
          </li>
        </ul>
        <h3>Supported CSS processors</h3>
        <ul>
          <li>
            <Link to={prefixLink('/postcss/')}>PostCSS</Link>
          </li>
          <li>
            <Link to={prefixLink('/css-modules/')}>CSS Modules</Link>
          </li>
          <li>
            <Link to={prefixLink('/sass/')}>Sass</Link>
          </li>
          <li>
            <Link to={prefixLink('/less/')}>Less</Link>
          </li>
        </ul>
      </div>
    )
  }
}
