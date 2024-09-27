
 import Card from "./Card"
 import Shimmer from "./Shimmer"
 import {Link} from "react-router-dom"
import {useEffect,useState} from "react"


const Body = () => {
  
   const[data,setData]=useState([])
   const[search,setSearch]=useState("")
   const[dummy,setDummy]=useState([])
   const[refresh,setRefresh]=useState(true)
    
   const handleItem=()=>{
      setRefresh(!refresh)
   }

   useEffect(()=>{
      const fetchData=async()=>{
     
         const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
     
      const x =await response.json()
       setData(x.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
      setDummy(x.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
   }
        fetchData()
   },[refresh])

  return(data.length===0)? (<Shimmer/>): (

<div>
   <button className="bg-black rounded-xl m-4 h-8 w-[180px] text-white hover:bg-orange-400" onClick={()=>{
      const filterData=data.filter(each=>each.info.avgRating>4.5)
      setData(filterData)
      console.log(filterData)
   }}>Toprated Restaurants</button>
     
    <button className="bg-black rounded-xl m-1 h-8 w-[120px] text-white hover:bg-orange-400"  onClick={handleItem} >Refresh</button>    
    <input onChange={(e)=>{
       setSearch(e.target.value)
    }}type="text"/>
    <button className="bg-black rounded-xl m-4 h-8 w-[180px] text-white hover:bg-orange-400" 
    onClick={()=>{
     const searchData=dummy.filter((each)=>
      each.info.name.toUpperCase().includes(search.toUpperCase())
   );
   setData(searchData)
     
    }}>Search</button>

 
     <div className="flex flex-wrap">
         
         {
            data.map((each)=>(
            <Link to={"/menu/"+each.info.id}> <Card key={each.info.id} item={each}/></Link>))
         }
       
     </div>
     </div>
  )
} 

export default Body
 