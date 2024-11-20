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
      {/* <footer className=" bg-[#292211] fixed bottom-0 w-full h-[65px] py-2 px-6 flex items-center justify-between   ">
        <Link className=" flex items-center justify-center flex-col gap-1 " to={"/"}>
          <img className=" w-[25px] h-[25px] object-cover" src="https://i.ibb.co.com/hMFYz7M/home.png" alt="Home Icon" />
          <span className="text-secondary text-[10px] "> Home </span>
        </Link>
        <Link className=" flex items-center justify-center flex-col gap-1 " to={"/taskList"}>
          <img className=" w-[30px] h-[30px] object-cover" src="https://i.ibb.co.com/vj0xkCR/task-2.png" alt=" Task Icon" />
          <span className="text-secondary text-[10px] "> Task </span>
        </Link>
        <Link className=" flex items-center justify-center  " to={"/membershipPlan"}>
          <img className=" absolute -top-[18px] w-[55px] sm:w-[65px] h-[55px] sm:h-[65px] object-cover" src="https://i.ibb.co.com/Q9B0n8M/vip.png" alt=" VIP Icon" />
        </Link>
        <Link className=" flex items-center justify-center flex-col gap-1 " to={"/supportTicket"}>
          <img className=" w-[30px] h-[30px] object-cover" src="https://i.ibb.co.com/jrzKQy5/contact.png" alt="Contact Icon" />
          <span className="text-secondary text-[10px] "> Contact </span>
        </Link>
        <Link className=" flex items-center justify-center flex-col gap-1 " to={"/fullLogin"}>
          <img className=" w-[30px] h-[30px] object-cover" src="https://i.ibb.co.com/Mf0jFV9/login.png" alt="Login Image" />
          <span className="text-secondary text-[10px] "> Login </span>
        </Link>
      </footer> */}


    </div>
  )
}

export default Dashbord