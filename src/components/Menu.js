

// import {useState,useEffect} from "react"
// import { useParams } from "react-router-dom"  
// // import {menudata} from "../utils/data1.js"

// const Menu = () => {
//   const [menu,setMenu]=useState(null)
 
//   const {id}= useParams()
//   console.log(useParams())

//   useEffect(()=>{
//  const fetchMenu= async()=>{
//  const res=await fetch(menu_api+id)
//  const data=await res.json()
//  setMenu(data)
  
//  }
//  fetchMenu()
// },[])

// const menu_api="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId="


 
// if(menu==null)return<h1>Menu Loading</h1>

// const{name,costForTwoMesage,locality,areaName,cloudinaryImageId}=menu.data.cards[2].card.card.info
// console.log(cloudinaryImageId)
// //  const{cloudinaryImageId} = menudata.data.cards[2].card.card.info
//    return (
//     <div className="text-center my-6">
//       <img alt="menuid" src={ cloudinaryImageId}/>
//      <h1 className="font-bold text-2xl">{name}</h1>
//      <p className="font-bold text-2xl">{locality}</p>
//      <p className="font-bold text-2xl">{areaName}</p>
//      <p className="font-bold text-2xl">{costForTwoMesage}</p>

//     </div>
//   )
// }

// export default Menu







 
import { useParams } from "react-router-dom"  
// import {menudata} from "../utils/data1.js"
import useResMenu  from "../utils/useResMenu"

const Menu = () => {
   
 
  const {re}= useParams()
   
  const menu=useResMenu(re)

   

 
if(menu==null)
  return
  <h1>Menu Loading</h1>

const{name,costForTwoMessage,locality,areaName,cloudinaryImageId}=menu.data.cards[2].card.card.info
 
//  const{cloudinaryImageId} = menudata.data.cards[2].card.card.info
   return (
    <div className="text-center my-6 mx-[550px] h-[250px] w-[220px] rounded-2xl m-4 p-4 shadow-xl bg-gray-200">
      {/* <img alt="menuid" src={ cloudinaryImageId}/> */}
     <h1 className="font-bold text-2xl text-red-600 ">{name}</h1>
     <p className="font-bold text-2xl">{locality}</p>
     <p className="font-bold text-2xl">{areaName}</p>
     <p className="font-bold text-2xl">{costForTwoMessage}</p>

    </div>
  )
}

export default Menu