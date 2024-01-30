import React from "react"
import BookList from "./components/BookList"

export default function App () {
  return (
    <>
    <div>
      <h1 className="title--big">
        O que sua <br></br>
        mente diz ?</h1>
    </div>
    <div>
      <h3 className="title--mid">
        Indicados
        <BookList />
      </h3>
    </div>
    </>
  )
}