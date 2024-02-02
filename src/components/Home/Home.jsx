/* eslint-disable no-unused-vars */
import React from "react"
import SecondRow from "../SecondRow"
import BottomBar from "../BottomBar"
import FirstRow from "../FirstRow"
import Header from "../Header"
import ThirdRow from "../ThirdRow"
import logoImage from '../../assets/logo/logo.png'
 
export default function Home () {
  return (
    <>
    <div>
      <div>
        <Header 
        headerTitle={'NAPKIN'}
        logoImg={logoImage}
        headerText={'10 anos do Nobel de '}
        authorText={'Alice Munro'}
        />
      </div>
       <div> 
        <SecondRow />
        <FirstRow  />
        <ThirdRow />
        <BottomBar />
        </div>
    </div>
    </>
  )
}