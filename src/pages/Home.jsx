import { Link } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css";  
import { Carousel } from 'react-responsive-carousel';
import { FaVolumeHigh } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import Header from "../component/Header";
import Footer from "../component/Footer";
 


const Home = () => {

 

  return (
    <div className=" pb-[100px] overflow-y-auto bg-primary w-full flex items-center justify-center flex-col gap-4 ">
   <Header/>

<div className=" bg-primary w-[95%] sm:w-[90%] h-full sm:h-[60vh] ">
 
 
  <Carousel autoPlay={true} stopOnHover={true} showArrows={false} swipeable={true} showStatus={false} infiniteLoop={true} showIndicators={true}  showThumbs={false} className="w-full h-full">
                <div className="w-full  h-full sm:h-[60vh] rounded-md ">
                    <img className="w-full h-full rounded-md  object-cover " src="./src/assets/sliderimage/image1.jpg" />
                   
                </div>
                <div className="w-full  h-full sm:h-[60vh] rounded-md">
                    <img className="w-full h-full rounded-md object-cover" src="./src/assets/sliderimage/image2.png" />
                    
                </div>
                <div className="w-full  h-full sm:h-[60vh] rounded-md ">
                    <img className="w-full h-full object-cover rounded-md" src="./src/assets/sliderimage/image3.png" />
                 
                </div>
            </Carousel>
</div>


<div className="  w-[95%] sm:w-[90%]   pl-3 flex items-center justify-center gap-3 bg-active rounded-lg py-3  ">
  <span className="text-secondary text-lg font-semibold "> <FaVolumeHigh/> </span>
  <Marquee pauseOnHover={true}     className="text-[14px] font-medium text-secondary ">🔰আসসালামু আলাইকুম🔰drsmarket🥇এর পক্ষ থেকে আপনাকে স্বাগতম।♥ 📢📢 দীর্ঘদিন যাবত সফলতা ও বিশ্বস্ততার সাথে করে কাজ আসছে drsmarket, আলহামদুলিল্লাহ।♥️ 🔰</Marquee>
</div>



<div className=" w-[95%] sm:w-[90%] bg-primary pb-4 flex items-center justify-center gap-4 " >


<div className=" w-[49%] flex items-center justify-center flex-wrap gap-4  ">

<a href="#" className=" w-full h-[140px] sm:h-[215px] rounded-lg flex flex-col items-center justify-center gap-1 bg-secondary ">
  <img className=" w-[100px] sm:w-[160px] h-[100px] sm:h-[160px] object-cover" src="./src/assets/contactimage/support.png" alt="" />
  <span> Help Center </span>
</a>

<a href="#" className=" w-full h-[140px] sm:h-[215px] rounded-lg  flex flex-col items-center justify-center gap-1 bg-secondary ">
  <img className=" w-[100px] sm:w-[160px] h-[100px] sm:h-[160px] object-cover" src="./src/assets/contactimage/telegram.png" alt="" />
  <span> Telegram </span>
</a>

<a href="#" className=" w-full h-[140px] sm:h-[215px] rounded-lg  flex flex-col items-center justify-center gap-1 bg-secondary ">
  <img className="w-[100px] sm:w-[160px] h-[100px] sm:h-[160px] object-cover" src="./src/assets/contactimage/youtube.png" alt="" />
  <span> Youtube </span>
</a>

</div>

<div className="    w-[49%] flex items-center justify-center flex-col gap-4 ">


<a href="#" className=" rounded-lg  w-full h-[290px] sm:h-[443px] flex flex-col items-center justify-center gap-1 bg-secondary ">
  <img className=" w-[120px] sm:w-[200px] h-[120px] sm:h-[200px] object-cover" src="./src/assets/contactimage/invite.png" alt="" />
  <span> Invite Friends </span>
</a>
<a href="#" className=" rounded-lg w-full h-[140px] sm:h-[215px] flex flex-col items-center justify-center gap-1 bg-secondary ">
  <img className=" w-[100px] sm:w-[160px] h-[100px] sm:h-[160px] object-cover" src="./src/assets/contactimage/whatapp.png" alt="" />
  <span> Whatapp </span>
</a>


</div>

</div>

<Link to={"/"} className=" w-[95%] sm:w-[90%] h-full sm:h-[350px] ">
    <img className="w-full h-full object-cover rounded-xl" src="./src/assets/icon/invite-banner.jpg" alt="" />
</Link>


<Footer/>


    </div>
  )
}

export default Home