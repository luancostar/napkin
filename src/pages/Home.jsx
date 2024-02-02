/* eslint-disable no-unused-vars */
import React from "react"
import SecondRow from "../components/SecondRow"
import BottomBar from "../components/BottomBar"
import FirstRow from "../components/FirstRow"
import Header from "../components/Header"
import ThirdRow from "../components/ThirdRow"
import logoImage from '../assets/logo/logo.png'
 
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