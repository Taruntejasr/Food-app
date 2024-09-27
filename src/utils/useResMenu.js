

import {useState,useEffect} from "react"


 const useResMenu=(re)=>{

  const [menu,setMenu]=useState(null)

  useEffect(()=>{
    const fetchMenu= async()=>{
    const res=await fetch(menu_api+re)
    const data=await res.json()
    setMenu(data)
     
    }
    fetchMenu()
   },[])
   
   const menu_api="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId="

        return menu
}

export default useResMenu