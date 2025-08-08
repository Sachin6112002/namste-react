import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () =>{
  const Online = useOnlineStatus()
     const [searchText, setSearchText] = useState("");
     const [logIn , setLogIn]= useState("LogIn")
    return (
<div className="w-screen flex pt-2 justify-between  bg-gradient-to-r from-green-400 to-blue-500 text-green-400 shadow-2xl shadow-green-900 sm:pr-3">
  
     <img className= "w-36 mix-blend-multiply " src={LOGO_URL}></img>   
    
    <div className="lg:w-1/2 hidden h-19 items-center pr-2 lg:flex  justify-center  ">
          <input
            type="text"
            className="border h-12  pl-4  border-r-0 rounded-l-full  bg-green-200 border-green-900 lg:w-1/2 lg:pl-6"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by name"
          />

          <button
            className="border border-l-0 w-20 h-12 rounded-r-full border-green-900 bg-blue-800 text-white  pr-2 hover:bg-green-600"
            onClick={() => {
              if (searchText.trim() === "") {
                setListOfRestaurants(allRestaurants); // Reset if empty
              } else {
                const filtered = allRestaurants.filter((res) =>
                  res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                );
                setListOfRestaurants(filtered);
              }
            }}
          >
            Search
          </button>
         <button
    className={`ml-5 h-5  w-5 border rounded-full text-black ${Online ? 'bg-green-500' : 'bg-red-500'}`}
  >

  </button>
                 </div>
 
        
        <ul className="sm:flex   items-center lg:w-1/4 gap-6 hidden text-black "> 
            <li className="hover:text-green-700">
                <button  onClick={()=> {logIn === "LogIn" ? setLogIn("Logout") : setLogIn("LogIn")} 
               }> {logIn} </button>
            </li>
            <li className="hover:text-green-700"> <Link to={"/"}>Home</Link></li>
            <li className="hover:text-green-700"> <Link to={"/about"}>About Us</Link>  </li>
           
            <li className="hover:text-green-700"> <Link to={"/cart"}>Cart</Link> </li>
        </ul>

    </div>
   
    )
}
export default Header;
