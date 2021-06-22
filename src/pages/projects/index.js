import React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/seo'
import {portfolio, projs} from '../../styles/projects.module.css'
import {graphql, Link} from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import Img from 'gatsby-image'
const Projects = ({data}) => {
    console.log(data)
    const projects = data.allMarkdownRemark.nodes

    return (
        <Layout>
            <Seo />
            <section className={portfolio}>
                <div>
                    <h2>Projects</h2>
                    <h4>my portfolio projects</h4>
                    <div className={projs}>
                        {projects.map( project => (
                            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                                <div>
                                    <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                                    <h3 style={{marginTop: "23px"}}>{ project.frontmatter.title }</h3>
                                    <p>{ project.frontmatter.description }</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div style={{textAlign:"center", paddingTop:"10px", paddingBottom:"10px", fontSize:"27px"}}>
                        <Link to={"https://www.facebook.com/TheNextWare"}>
                            <FontAwesomeIcon style={{marginRight:"40px", marginLeft:"40px"}} icon={faFacebookSquare} />    
                        </Link> 
                        <Link to={"https://twitter.com/techforbusines"}>
                            <FontAwesomeIcon style={{marginRight:"40px"}} icon={faLinkedin} />
                        </Link>
                        <Link to={"https://www.linkedin.com/in/mohammed-bouaziz-44145b210/"}>
                            <FontAwesomeIcon style={{marginRight:"40px"}} icon={faTwitterSquare} /> 
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>

    )
}

export default Projects;
export const query = graphql`

    query ProjectsPage {
      allMarkdownRemark(filter: {fields: {collection: {eq: "projects"}}}) {
          nodes {
                frontmatter {
                        title
                        slug
                        description
                        thumb {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        }
                    id
                }
                        }
                    site {
                        siteMetadata {
                            contact
                        }
                    }
                    }
`
