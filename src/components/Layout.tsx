import React from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from '../hooks/useSiteMetadata'
import 'sanitize.css'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const siteMetadata = useSiteMetadata()

  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>{siteMetadata.title}</title>
      </Helmet>

      <div>{children}</div>
    </>
  )
}

export default Layout
