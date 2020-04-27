import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const query = graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
  return useStaticQuery(query).site.siteMetadata
}

export default useSiteMetadata
