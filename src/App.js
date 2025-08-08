import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contactus from "./Contactus";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="w-full">
      <Header className ="w-full" />
       <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
    {   path: "/",
        element: <AppLayout/>,
        children: [
          {
            path: "/",
            element: <Body />,
          },
          {path: "/about",
        element: <About/>,

    },
    {path: "/contactUs",
        element: <Contactus/>,

    },
     {path: "/cart",
        element: <Cart/>,

    },
  {
    path: "/restaurants/:resId",
    element: <RestaurantMenu/>
  }],
    
       errorElement: <Error/>, 
    }, 
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
