import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2  style={{ color: '#e2e2e2', fontFamily: 'Source Code Pro Semibold', fontSize: "16px" }} >{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const tag = this.props.pathContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <section className="section">
        <Helmet title={`${tag} | ${title}`} />
        <div className="container content">
          <div className="columns">
            <h3 className="" style={{ color: '#e2e2e2', fontFamily: 'Source Code Pro Semibold' }}>{tagHeader}</h3>
            <ul className="">{postLinks}</ul>
            <p>
              <Link to="/tags/">Browse all tags</Link>
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
