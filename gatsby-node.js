const path = require('path')
const _ = require("lodash")

exports.onCreateNode = ({ node, actions, getNode  }) => {
    const { createNodeField  } = actions;
    if (_.get(node, "internal.type") == `MarkdownRemark`) {
        const parent = getNode(_.get(node, "parent"));
        createNodeField({
            node, 
            name: "collection",
            value: _.get(parent, "sourceInstanceName")
        });
    }
};




exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
            
            query result {
                allMarkdownRemark {
                    nodes {
                        fields {
                            collection
                        }
                        frontmatter {
                            blogslug
                            slug
                        }
                    }
                }
            }
  `
    )
    data.allMarkdownRemark.nodes.forEach(node => {
        if (node.fields.collection === "projects") {
        actions.createPage({
            path: '/projects/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/project-details.js'),
            context: { slug : node.frontmatter.slug }
        });
    } else {

        actions.createPage({
            path: '/blog/' + node.frontmatter.blogslug,
            component: path.resolve('./src/templates/blog-details.js'),
            context: { blogslug : node.frontmatter.blogslug }
        })
    }
})
}
