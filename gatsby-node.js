const path = require('path');


module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const projectTemplate = path.resolve('./src/templates/project.js');
    const response = await graphql(`
        query {
            allContentfulProject {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    response.data.allContentfulProject.edges.forEach( edge => {
        createPage({
            component: projectTemplate,
            path: `/project/${edge.node.slug}`,
            context: {
                slug: edge.node.slug,
            }
        })
    } )
}