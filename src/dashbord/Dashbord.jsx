import { Link } from "react-router-dom"
import Profileinfo from "../component/Profileinfo"
import Usertask from "../component/Usertask"
import DashbordPanel from "../component/DashbordPanel"




const Dashbord = () => {
  return (
    <div className="w-full h-full pb-[90px] bg-primary flex items-center justify-center flex-col gap-3" >
      <header className=" z-50 bg-active sticky top-0 py-4 px-8 w-full h-[55px] flex items-center justify-between   text-white">

        <Link to={"/"}>
          <img className=" w-[30px] h-[30px] object-cover" src="https://i.ibb.co.com/p0WZsBZ/logo.png" alt="" />
        </Link>
        <Link to={"/dashbord"}>
          <img className=" w-[30px] h-[30px] object-cover" src="https://i.ibb.co.com/MfTBS0g/dummy-profile.png" alt="" />
        </Link>
      </header>

      <div className=" w-full flex items-center justify-center flex-col gap-3">

        <Profileinfo />
        <Usertask />
        <DashbordPanel />
      </div>

      <footer className=" bg-[#292211] fixed bottom-0 w-full h-[65px] py-2 px-6 flex items-center justify-between   ">
        <Link className=" flex items-center justify-center flex-col gap-1 " to={"/"}>
          <img className=" w-[25px] h-[25px] object-cover" src="./src/assets/icon/home.png" alt="" />
          <span className="text-secondary text-[10px] "> Home </span>
        </Link>
        <Link className=" flex items-center justify-center flex-col gap-1 " to={"/taskList"}>
          <img className=" w-[30px] h-[30px] object-cover" src="./src/assets/icon/task-2.png" alt="" />
          <span className="text-secondary text-[10px] "> Task </span>
        </Link>
        <Link className=" flex items-center justify-center  " to={"/membershipPlan"}>
          <img className=" absolute -top-[18px] w-[55px] sm:w-[65px] h-[55px] sm:h-[65px] object-cover" src="./src/assets/icon/vip.png " alt="" />
        </Link>
        <Link className=" flex items-center justify-center flex-col gap-1 " to={"/supportTicket"}>
          <img className=" w-[30px] h-[30px] object-cover" src="./src/assets/icon/contact.png " alt="" />
          <span className="text-secondary text-[10px] "> Contact </span>
        </Link>
        <Link className=" flex items-center justify-center flex-col gap-1 " to={"/fullLogin"}>
          <img className=" w-[30px] h-[30px] object-cover" src="./src/assets/icon/login.png " alt="" />
          <span className="text-secondary text-[10px] "> Login </span>
        </Link>
      </footer>
    </div>
  )
}

export default Dashbord