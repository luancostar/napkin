import Header from "../../components/Header"
import FirstRow from "../../components/FirstRow"
import SecondRow from "../../components/SecondRow"
import ThirdRow from "../../components/ThirdRow"
import BottomBar from "../../components/BottomBar"
import logoImage from "../../assets/logo/logo.png"

export default function Home() {
    return (
        <>
       <Header 
       headerTitle={'NAPKIN'}
       logoImg={logoImage}
       headerText={'10 anos do nobel de'}
       authorText={'Alice Munro'}/>
       <SecondRow/> 
       <FirstRow/>
       <ThirdRow/>
       <BottomBar/> 
        </>
    )
}