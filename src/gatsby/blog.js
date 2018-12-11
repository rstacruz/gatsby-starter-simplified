const { createFilePath } = require('gatsby-source-filesystem')

/*::

  export type Context = {
    templatePath: string,
    buildContext: (Node) => object
  }

*/

const buildExports = (ctx /*: Context */) => {
  return {
    onCreateNode: onCreateNode.bind(null, ctx),
    createPages: createPages.bind(null, ctx),
  }
}

const onCreateNode = (_ctx /*: any */, { node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}

/**
 * Create pages.
 */

const createPages = (
  ctx /*: Context */,
  { actions, graphql } /*: { actions: Actions, graphql: Graphql } */
) => {
  return graphql(buildQuery()).then(result => {
    if (result.errors) return Promise.reject(result.errors)

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      buildPage(ctx, { node, actions })
    })
  })
}

/**
 * Build a page from a node
 */

function buildPage(
  ctx /*: Context */,
  { node, actions } /*: { node: any, actions: Actions } */
) {
  const { createPage } = actions

  const extraContext =
    typeof ctx.buildContext === 'function' && ctx.buildContext(node)

  const context = {
    node_id: node.id,
    nodeType: 'post',
    title: node.frontmatter.title,
    slug: node.fields.slug,
    ...(extraContext || {}),
  }

  createPage({
    path: node.fields.slug,
    component: ctx.templatePath,
    context,
  })
}

/**
 * The graphql query
 */

function buildQuery() {
  return `
  {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
}

module.exports = buildExports
