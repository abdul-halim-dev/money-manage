import { Link } from "react-router-dom"



const NotFound = () => {
  return (
    <div className="w-full  flex p-4 py-[50px] items-center justify-center flex-col gap-0">
      <div className=" w-[80%] sm:w-[60%]   ">
        <img className="w-full  h-auto object-cover" src="https://i.ibb.co.com/9p2g8Hy/error-404.png" alt="" />
      </div>
      <div className="w-full sm:w-[60%]  flex items-center justify-start flex-col gap-3 ">
        <h1 className="text-2xl font-semibold ">404 Page not found</h1>
        <p className="text-lg font-semibold text-center">page you are looking for doesn't exit or an other error ocurred
          or temporarily unavailable.</p>
        <Link className="bg-active text-secondary text-lg font-semibold rounded-lg shadow-lg px-8 py-3 " to={'/'}> Go To Home</Link>
      </div>
    </div>
  )
}

export default NotFound