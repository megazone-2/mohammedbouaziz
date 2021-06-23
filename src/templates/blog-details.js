import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/seo';
import Img from 'gatsby-image'
import {details, featured, maintext} from '../styles/project-details.module.css'
import {graphql, Link} from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export default function BlogDetails({data}) {
    const {html} = data.markdownRemark
    const {tit, desc, cover} = data.markdownRemark.frontmatter
    return (
        <Layout>
            <Seo 
                title={tit}
                description={desc}
            />
            <div className={details}>
                <div className={featured}>
                    <Img fluid={cover.childImageSharp.fluid} />
                </div>
                <h2 style={{textAlign:"center", marginTop:"2em"}}>{tit}</h2>
                <h3 style={{textAlign:"center"}}>{desc}</h3>
                <div className={html} style={{lineHeight: "1.6", marginLeft:"40px"}}  dangerouslySetInnerHTML={{__html: html}} />
                <div style={{textAlign:"center", fontSize:"27px"}}>
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
        </Layout>

    )

}

export const query = graphql`
    query BlogD($blogslug: String!) {
      markdownRemark(frontmatter: {blogslug: {eq: $blogslug}}) {
          html
          frontmatter {
            blogslug
            tit
            desc
            cover {
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
