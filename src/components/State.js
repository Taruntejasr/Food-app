 


//  import {useState} from "react"
//  import {useEffect} from "react"
 
//  const State = () => {
//   const [count,setCount]=useState(0)
//   const [value,setValue]=useState(true)
   
//   const handleItems=()=>{
//     setCount(count+1)
   
//   }
//   const handletext=()=>{
//     setValue(!value)
//   }

//   useEffect(()=>{
//    console.log("inside effect")
//   },[value])
   
//   console.log("render")
//    return (
//      <div>
//       <h1>{count}</h1>
//       <button onClick={handleItems}>Click</button>
//        <button onClick ={handletext}>change</button>
//        <h1>{value? "Html":"React"}</h1>
//      </div>
//    )
//  }
 
//  export default State