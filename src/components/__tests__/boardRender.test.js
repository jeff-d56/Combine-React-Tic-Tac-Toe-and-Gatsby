import React from "react";
import Board from "../TicTacToe/board";
import renderer from "react-test-renderer"

var testSqaures = [null, null, null, null, null, null,null, null, null];

describe('Test if board renders correctly at start of game', () => {
	it("renders correctly", () => {
    testSqaures = [null, null, null, null, null, null,null, null, null];
	
    const tree = renderer.create(
	<Board
        squares={testSqaures}
        onClick={false}
    />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  
});



