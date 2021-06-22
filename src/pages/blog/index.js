import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/Layout'
import Seo from '../../components/seo'
import {portfolio, projs} from '../../styles/projects.module.css'
import Img from 'gatsby-image'
const Blog = ({ data }) => {
    const projects = data.allMarkdownRemark.nodes
    return (
        <Layout>
            <Seo /> 
            <div className={portfolio}>
                <h2>Blog</h2>
                <h3>Free council and Expertise</h3>
                <div className={projs}>
                    {projects.map(project => (
                        <Link to={"/blog/" + project.frontmatter.blogslug} key={project.id}>
                            <div>
                                <Img fluid={project.frontmatter.nail.childImageSharp.fluid} />
                                <h3 style={{marginTop: "23px"}}>{project.frontmatter.tit}</h3>
                                <p>{project.frontmatter.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query BlogList {
      allMarkdownRemark(filter: {fields: {collection: {eq: "blog"}}}) {
          nodes {
             frontmatter {
                        tit
                        blogslug
                        desc
                nail {
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
    }
`

export default Blog;

