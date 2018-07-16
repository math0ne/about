import React from 'react'
import Link from 'gatsby-link'
import Project from '../components/Project'
import "typeface-source-code-pro";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faEnvelope, faLightbulb, faUser } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Markdown from 'markdown-to-jsx';

export default class IndexPage extends React.Component {

  componentWillMount() {
    // necessary so that gatsby build will work properly
    if (typeof window !== `undefined`) {
      //mapbox
      var Layer = ReactMapboxGl.Layer;
      var Feature = ReactMapboxGl.Feature;

      Map = ReactMapboxGl({
        accessToken: "pk.eyJ1IjoibWF0aDBuZSIsImEiOiJjaXRhdG1rZ3QwM2hzMnVzNnZhNG1vcXpkIn0.q2x_lVpCJvQaRaexWYtDUw",
        interactive: false
      });
    }
  }

  render() {

    if (typeof window === `undefined`) { return null; }
    

  


    library.add(faFileAlt, fab, faEnvelope, faLightbulb, faUser);

    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      
      <div className="container">


        <div style={{ opacity: '.5' }}>
          <Map
            style="mapbox://styles/math0ne/cjj3ov1ny1ozm2sno7bxri65z"
            center={[-123.097001, 48.913484]}
            containerStyle={{
              height: "4200px",
              width: "100%"
            }}>

          </Map>
        </div>


        <div  style={{ position:  'absolute', top: '0px', left: '0px', right: '0px', maxWidth: '800px' }}>

          <div>
            
            <div className="content">
              <div className="title-fragment">
                <img src="/img/keyboard.png" className="title-fragment" style={{ float: 'left', marginLeft: '0px', backgroundColor: '#2b303b', padding: '15px', paddingRight: '15px' }} />
              </div>

              <div className="headingSegmentContainerTop headingSegmentContainerTopheadingseg2">
                <div className="headingSegmentContainerInner">
                  <h2 className="headingSegmentContainerHeader">
                    <span className="headingSegmentContainerHeaderSpan">
                      {data.aboutyaml.edges["0"].node.title}
                    </span>
                  </h2>
                </div>
              </div>

              <div className="headingSegmentContainerTop headingSegmentContainerTopheadingseg3">
                <div className="headingSegmentContainerInner">
                  <h2 className="headingSegmentContainerHeader">
                    <span className="headingSegmentContainerHeaderSpanLight">
                      {data.aboutyaml.edges["0"].node.subtitle}
                    </span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="clear"></div>

            <div className="about_main">
              <Markdown children={data.aboutyaml.edges["0"].node.blurb} />
            </div>
            
            <div className="content">

              <div className="headingSegmentContainer">
                <div className="headingSegmentContainerInner">
                  <h2 className="headingSegmentContainerHeader">
                    <span className="headingSegmentContainerHeaderSpan">
                      <FontAwesomeIcon icon="lightbulb" /> Personal Projects
                    </span>
                  </h2>
                </div>
              </div>
            
              <Project name="Personal Dotfiles" description="Personal dotfiles orchestrated with GNU Stow and Ansible" image="/img/surfacebook_december_2017_by_math0ne-dbxyjlt.png" link="https://github.com/math0ne/dotfiles" />

              <Project name="Windows Application Launcher" description="A windows application launcher inspired by rofi created with electron" image="/img/launch-demo.gif" link="https://github.com/math0ne/windows-application-launcher" />                   
              <div className="clear"></div>


              <ul className="projects-list">
                <li>
                  <a href="http://spelunkylikes.ga">Spelunkylikes</a>
                  <span style={{ color: '#e2e2e2', fontFamily: 'Source Code Pro Light' }}> &bull; </span>
                  <small style={{ color: '#e2e2e2', fontFamily: 'Source Code Pro Light' }}>A curated list of games similar to Spelunky: spelunkylikes.ga</small>
                </li>
                <li>
                  <a href="https://github.com/math0ne/drupal-orgmode">Drupal Orgmode</a>
                  <span style={{ color: '#e2e2e2', fontFamily: 'Source Code Pro Light' }}> &bull; </span>
                  <small style={{ color: '#e2e2e2', fontFamily: 'Source Code Pro Light' }}>A module to deploy Orgmode content to Drupal</small>
                </li>
                <li>
                  <a href="https://github.com/math0ne/emacs-org-basecamp">Basecamp Orgmode</a>
                  <span style={{ color: '#e2e2e2', fontFamily: 'Source Code Pro Light' }}> &bull; </span>
                  <small style={{ color: '#e2e2e2', fontFamily: 'Source Code Pro Light' }}>Emacs Mode to import basecamp todo's into Orgmode</small>
                </li>
              </ul>                                         
            </div>                    

            <div className="content">
              <div className="headingSegmentContainer">
                <div className="headingSegmentContainerInner">
                  <h2 className="headingSegmentContainerHeader">
                    <span className="headingSegmentContainerHeaderSpan">
                      <FontAwesomeIcon icon="user" /> Contact <a href="https://github.com/math0ne"><FontAwesomeIcon icon={['fab', 'github']} /> </a> 
                      <a href="https://www.linkedin.com/in/mcquay/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /> </a> 
                      <a href="mailto:math0ne@gmail.com"><FontAwesomeIcon icon="envelope" /> </a> 
                      <a href="https://twitter.com/math0ne"><FontAwesomeIcon icon={['fab', 'twitter']} /> </a> 
                      <a href="https://stackoverflow.com/users/347294/math0ne"><FontAwesomeIcon icon={['fab', 'stack-exchange']} /> </a> 
                      <a href="https://www.facebook.com/nothingistrueeverythingispermitted"><FontAwesomeIcon icon={['fab', 'facebook-f']} /> </a>
                    </span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="content">
              <div className="headingSegmentContainer">
                <div className="headingSegmentContainerInner">
                  <h2 className="headingSegmentContainerHeader">
                    <span className="headingSegmentContainerHeaderSpan">
                      <FontAwesomeIcon icon="file-alt" /> Blog
                    </span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="content">
              <ul className="projects-list">
                {posts
                  .map(({ node: post }) => (
                    <li key={post.id} style={{ marginBottom: '0px' }}>
                      <Link style={{ color: '#e2e2e2', fontFamily: 'Source Code Pro', fontWeight: 'bold' }} to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                      <span style={{ color: '#e2e2e2', fontFamily: 'Source Code Pro Light' }}> &bull; </span>
                      <small style={{ color: '#e2e2e2', fontFamily: 'Source Code Pro Light' }}>{post.frontmatter.date}</small>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    aboutyaml:allAboutYaml {
      edges {
        node {
          title
          subtitle
          blurb
        }
      }
    }
  }
`
