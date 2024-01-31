import React from "react"
import BookList from "./components/BookList"
import SecondRow from "./components/SecondRow"
import BottomBar from "./components/BottomBar"

export default function App () {
  return (
    <>
    <div>
      <h1 className="title--big">
        Através <br></br>
        dos Séculos.</h1>
    </div>
    <div>

        <BookList  />
        <SecondRow />
        <BottomBar />
    </div>
    </>
  )
}