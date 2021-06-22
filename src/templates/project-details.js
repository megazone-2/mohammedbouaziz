import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import {details, featured} from '../styles/project-details.module.css'
import {graphql} from 'gatsby'

export default function ProjectDetails({data}) {
    const {html} = data.markdownRemark
    const {title, description, featuredImg} = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className={details}>
                <div className={featured}>
                    <Img fluid={featuredImg.childImageSharp.fluid} />
                </div>
                <h2 style={{textAlign:"center", marginTop:"2em"}}>{title}</h2>
                <h3 style={{textAlign:"center"}}>{description}</h3>
                <div style={{textAlign:"justify", padding:"100px"}} className={html}  dangerouslySetInnerHTML={{__html: html}} /> 
            </div>
        </Layout>

    )

}

export const query = graphql`
    query ProjectD($slug: String!) {
      markdownRemark(frontmatter: {slug: {eq: $slug}}) {
          html
          frontmatter {
            slug
            title
            description
            featuredImg {
              childImageSharp {
               fluid {
                ...GatsbyImageSharpFluid
               }
              }
             }
            }
           }
          }

`
