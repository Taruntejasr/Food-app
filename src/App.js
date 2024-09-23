 import Header from "./components/Header";
 import "./App.css"
 import Body from "./components/Body"
 import {createBrowserRouter,Outlet} from "react-router-dom"
 import Offer from "./components/Offer"
 import Help from "./components/Help"
 import Search from "./components/Search"
import SignIn from "./components/SignIn"
 import Cart from "./components/Cart"
 


function App() {
  return (
    <div>
       
     <Header/>
     
     <Outlet/> 
     
    </div>
  )
}

  export const appRouter = createBrowserRouter([
 {
  path: "/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Body/>
  },
  {
    path:"/Offer",
    element:<Offer/>
  },
   
  {
    path:"/Help",
    element:<Help/>
  },
  
  {
    path:"/Cart",
    element:<Cart/>
  },
  
   
  {
    path:"/SignIn",
    elememt:<SignIn/>
  },
  {
    path:"/Serach",
    elememt:<Search/>
  },
  
  ]
 }
 

])







 
