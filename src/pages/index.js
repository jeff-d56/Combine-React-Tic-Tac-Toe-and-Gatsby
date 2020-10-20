import React from "react"
import Game from "../components/TicTacToe/game"
import Header from "../components/header"
import './index.css';

export default function Home() {
  return (
    <div style={{ color: `teal` }}>
	  <Header/>
	  <Game/>
      
    </div>
  )
}



