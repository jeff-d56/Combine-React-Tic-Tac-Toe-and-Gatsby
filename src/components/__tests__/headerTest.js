import React from "react"
import renderer from "react-test-renderer"

import { PureHeader as Header } from "../header"

describe("Header", () => {
  it("renders correctly", () => {
    const data = {
      site: {
        siteMetadata: {
          title: "Test if header works.",
        },
      },
    }
    const tree = renderer.create(<Header data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})