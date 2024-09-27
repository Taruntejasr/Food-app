 import Header from "./components/Header";
 import "./App.css"
 import Body from "./components/Body"
 import {createBrowserRouter,Outlet} from "react-router-dom"
 import {lazy, Suspense} from "react"
//  import Offer from "./components/Offer"
//  import Help from "./components/Help"
// import Search from "./components/Search"
// import SignIn from "./components/Sign In"
//  import Cart from "./components/Cart"
 import Menu from "./components/Menu";
 const Offer = lazy(()=>import("./components/Offer"))
 const Help = lazy(()=>import("./components/Help"))
 const Search = lazy(()=>import("./components/Search"))
 const SignIn =lazy(()=>import("./components/Sign In"))
 const Cart = lazy(()=>import("./components/Cart"))
 


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
    element:<Suspense fallback={<h1>Loading</h1>}><Offer/></Suspense> 
  },
   
  {
    path:"/Help",
    element:<Suspense fallback={<h1>Loading</h1>}><Help/></Suspense>
  },
  
  {
    path:"/Cart",
    element:<Suspense fallback={<h1>Loading</h1>}><Help/><Cart/></Suspense> 
  },
  {
    path:"/Search",
    element:<Suspense fallback={<h1>Loading</h1>}><Search/></Suspense> 
  },
  {
    path:"/Sign In",
    element:<Suspense fallback={<h1>Loading</h1>}><SignIn/></Suspense> 
  },
  {
    path:"/menu/:re",
    element:<Menu/>
  }

   
   
  ]
 }
 

])







 
