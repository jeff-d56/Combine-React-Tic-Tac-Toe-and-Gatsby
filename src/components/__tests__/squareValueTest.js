import React from "react";
import Square from "../TicTacToe/square";
import renderer from "react-test-renderer"

var testBoard = 0;
describe('test if square displays correct value', () => {
	it("renders correctly", () => {
    
    const tree = renderer.create(<Square
        value={0}
        onClick={() => this.props.onClick(i)}
      />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  
});



