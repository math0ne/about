import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './all.sass'
import './base16-ocean.dark.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Aidan McQuay - Full Stack Developer and Systems Engineer" />
    {/*<Navbar />*/}
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
