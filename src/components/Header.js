 import {logo_img} from "../utils/constants"
 import {Link} from "react-router-dom"
 
 const Header=()=>{
  return(
    <div className="flex justify-between bg-orange-200 shadow-xl p-2 rounded-2xl">
       <img alt="logo" className="h-24 w-24 rounded-full" src={logo_img}></img>

     <ul className="flex items-center mx-10">
    <li className="px-2  font-bold text-lg">Swiggy Corporate</li>
        <li className="px-2  font-bold text-lg"><Link to="/Sign In">Sign In</Link></li>
        <li className="px-2  font-bold text-lg"><Link to="/Offer">Offers</Link></li>
        <li className="px-2  font-bold text-lg"><Link to="/Help">Help</Link></li>
        <li className="px-2  font-bold text-lg"><Link to="/Search">Search</Link></li>
        <li className="px-2  font-bold text-lg"><Link to="/Cart">Cart</Link></li> 
      </ul>
 
    </div>
  )
 }

 export default Header