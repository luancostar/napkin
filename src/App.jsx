import React from "react"
import SecondRow from "./components/SecondRow"
import BottomBar from "./components/BottomBar"
import FirstRow from "./components/FirstRow"
import Header from "./components/Header"
import ThirdRow from "./components/ThirdRow"

export default function App () {
  return (
    <>
    <div>
      <div>
        <Header headerTitle={'Napkin'} />
      </div>
       <div style={{marginTop:'160px'}}> 
        <SecondRow />
        <FirstRow  />
        <ThirdRow />
        <BottomBar />
        </div>
    </div>
    </>
  )
}