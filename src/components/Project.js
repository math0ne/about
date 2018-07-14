import React from 'react'

const Project = ({ name, description, image, link }) => (
  <div className="project-feature-container">
    <div className="project-feature">
      <a href={link}><img src={image} /></a>
      <a href={link}>{name}</a>
      <small style={{ color: '#e2e2e2', fontFamily: 'Source Code Pro Light' }}>{description}</small>                        
    </div>
  </div>
)

export default Project