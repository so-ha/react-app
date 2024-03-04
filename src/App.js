import React, { Suspense, lazy, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
// import Grocery from './components/Grocery';

const Grocery = lazy(()=>import('./components/Grocery'))

const AppComponent = () => {


  const [userInfo, setUserInfo] = useState();

  useEffect(()=>{
    const data = {
      name : "Soha Fatima"
    }
    setUserInfo(data.name)
  }, [])
    return(
    <UserContext.Provider value={{loggedInUser:userInfo, setUserInfo}}>
      <div className='app'>
        {/* <UserContext.Provider value={{loggedInUser:"Elon Musk"}}> */}
        <Header/>
         {/* </UserContext.Provider> */}
        <Outlet/> 
      </div>
    </UserContext.Provider>)
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppComponent/>,
    children: [
      {
        path: "/",
        element : <Body/>
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path : "/cart",
        element : <Cart/>
      },
      {
        path : "/grocery",
        element : <Suspense fallback={(<div>Loading..</div>)}><Grocery/></Suspense>
      },
      {
        path : "/restaurant/:resId",
        element : <RestaurantMenu/>
      }
    ],
    errorElement : <Error/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}><AppComponent/></RouterProvider>)