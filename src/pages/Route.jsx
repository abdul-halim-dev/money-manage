import { createBrowserRouter } from "react-router-dom"
import Home from "./Home"
import Signup from "./Signup"
import Dashbord from "../dashbord/Dashbord"
import NotFound from "./NotFound"
import MembershipPlan from "./MembershipPlan"
 
import BalanceTransfer from "../component/BalanceTransfer"
import ChangePassword from "../component/ChangePassword"
import AccountInfo from "../component/AccountInfo"
import Commission from "../component/Commission"
import WithdrawHistory from "../component/WithdrawHistory"
import DepositHistory from "../component/DepositHistory"
import MyTeam from "../component/MyTeam"
import TwoFactor from "../component/TwoFactor"
import Withdraw from "../component/Withdraw"
import Deposit from "../component/Deposit"
import AccountRecovery from "../component/AccountRecovery"
import TaskList from "../component/TaskList"
import SupportTicket from "../component/SupportTicket"
import OpenTicket from "../component/OpenTicket"
import PurchesMembership from "../component/PurchesMembership"
import Login from "./Login"
 

const Route =createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/membershipPlan",
    element:<MembershipPlan/>
  },
  {
    path:"*",
    element:<NotFound/>
  },

  {
    path:"/dashbord",
    element:<Dashbord/>
  },
  {
    path:"/balanceTransfer",
    element:<BalanceTransfer/>
  },
  {
    path:"/AccountInfo",
    element:<AccountInfo/>
  },
  {
    path:"/changePassword",
    element:<ChangePassword/>
  },
  {
    path:"/commission",
    element:<Commission/>
  },
  {
    path:"/withdrawHistory",
    element:<WithdrawHistory/>
  },
  {
    path:"/depositHistory",
    element:<DepositHistory/>
  },
  {
    path:"/myTeam",
    element:<MyTeam/>
  },
  {
    path:"/twoFactor",
    element:<TwoFactor/>
  },
  {
    path:"/withdraw",
    element:<Withdraw/>
  },
  {
    path:"/deposit",
    element:<Deposit/>
  },
  {
    path:"/accountRecovery",
    element:<AccountRecovery/>
  },
  {
    path:"/taskList",
    element:<TaskList/>
  },
  {
    path:"/supportTicket",
    element:<SupportTicket/>
  },
  {
    path:"/openTicket",
    element:<OpenTicket/>
  },
  {
    path:"/purchesMembership",
    element:<PurchesMembership/>
  }

])
 
export default Route