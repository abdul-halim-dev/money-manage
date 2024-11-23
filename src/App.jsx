import { RouterProvider } from "react-router-dom"
import Route from "./pages/Route"
 import './app.css'
 
 const App = () => {
   return (
    <RouterProvider router={Route}/>
   )
 }
 
 export default App