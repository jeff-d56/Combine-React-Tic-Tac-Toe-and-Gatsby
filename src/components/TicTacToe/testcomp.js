import React from "react"
import Square from "../TicTacToe/square"

export default function renderSquare(i) {
    return (
      <Square
        value = {this.props.squares[i]}
        onClick = {() => this.props.onClick(i)}
      />
    );
  
}