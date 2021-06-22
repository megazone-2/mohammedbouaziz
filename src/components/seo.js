import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const Seo = ({ title, keywords, description, url, author }) => {
    return (
        <StaticQuery 
            query={detailsQuery}
            render={data  =>  { 
                const metaDescription = description || data.site.siteMetadata.description 
                const metaTitle = title  || data.site.siteMetadata.title
                const metaAuthor = author  || data.site.siteMetadata.author     
                const metaUrl =  url || data.site.siteMetadata.url
                const metakeywords = keywords || ["technology", 
                                                    "business", "digitalization", "saas", 
                                                    "web", "mobile", "artificial intelligence", 
                                                    "Machine Learning", "data", "analytics", "analysis",
                                                    "dashborad", "Business Intelligence", "full stack",
                                                    "engineer", "developper", "phd", "digital",
                                                    "expert", "software"]
                return (
                    <Helmet
                        title = {title}
                        meta =  {[
                            {
                                name: `description`,
                                content:  metaDescription,
                            },
                            {
                                property: `og:title`,
                                content: metaTitle
                            },
                            {
                                property: `og:description`,
                                content: metaDescription
                            },
                            {
                                property: `og:type`,
                                content: `website`
                            },
                            {
                                property: `og:url`,
                                content: metaUrl
                            },
                            {
                                property: `og:author`,
                                content: metaAuthor
                            }
                        ].concat (
                            metakeywords && metakeywords.length > 0 ? {
                                name: `keywords`,
                                content: metakeywords.join(`, `),
                            } : []
                        )
                    }
                    />
                ) 
            }}
            />
    )
}

const detailsQuery = graphql `
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title,
                description,
                contact,
                url, 
                twitterUsername,
                facebookUsername, 
                author
            }
        }
    }
`
export default Seo;