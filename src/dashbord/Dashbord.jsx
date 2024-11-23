import { Link } from "react-router-dom"
import Profileinfo from "../component/Profileinfo"
import Usertask from "../component/Usertask"
import DashbordPanel from "../component/DashbordPanel"
import Footer from "../component/Footer"
import Header from "../component/Header"

const Dashbord = () => {
  return (
    <div className="w-full h-full pb-[90px] bg-primary flex items-center justify-center flex-col gap-3" >
     <Header/>
      <div className=" w-full flex items-center justify-center flex-col gap-3">
        <Profileinfo />
        <Usertask />
        <DashbordPanel />
      </div>
    <Footer/>
    </div>
  )
}

export default Dashbord