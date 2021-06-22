import React from "react"
import Layout from '../components/Layout'
import {header, btn, main, card, cardHeader, cardBody, imgHolder, nameAge, city, cardFooter, item, value, meta, image, section} from '../styles/home.module.css'
import {graphql, Link} from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import Img from "gatsby-image"
export default function Home({ data }) {
 return (
    <Layout>
     <section className={header}>
        <div>
            <h2>Mohammed Bouaziz</h2>
            <h3>Engineer Developper & PhD </h3>
            <p>I create digital solutions <br/> for companies and individuals</p>
            <div style={{textAlign:"left", paddingTop:"10px", paddingBottom:"10px", fontSize:"27px"}}>
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
            <Link className={btn} to="/projects">Projects</Link>
        </div>
         <section className={main}>
            <div className={card}>
                <div className={cardHeader}></div>
                <div className={cardBody}>
                    <div className={imgHolder}>
                        <Img className={image} fluid={data.file.childImageSharp.fluid} />
                    </div>
                    <h2 className={nameAge}>
                        Full Stack Engineer & PhD
                    </h2>
                    <h3 className={city}>Tech in the service of business</h3>
                </div>
                <div className={cardFooter}>
                    <div className={item}>
                        <h4 className={value}>+40</h4>
                        <h5 className={meta}>projects</h5>
                    </div>
                    <div className={item}>
                        <h4 className={value}>+6</h4>
                        <h5 className={meta}>Years experience</h5>
                    </div>
                    <div className={item}>
                        <h4 className={value}>+20</h4>
                        <h5 className={meta}>Happy clients</h5>
                    </div>
                </div>
            </div>
         </section>
     </section>
    </Layout >
     )
}


export const query = graphql`
query MyQuery {
  file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
            fluid {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
`
