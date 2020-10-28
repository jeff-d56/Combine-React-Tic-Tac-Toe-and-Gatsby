import React from "react"

export const PureHeader = ({ data }) => (
  <header>
    <h1>{data.site.siteMetadata.title}</h1>
  </header>
)

export const Header = props => {
  const data = {
      site: {
        siteMetadata: {
          title: "Such wow. Very React.",
        },
      },
    }
  return <PureHeader {...props} data={data}></PureHeader>
}

export default Header