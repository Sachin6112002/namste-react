import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
 
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]); // Backup of full list



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
     const cards = json?.data?.cards;

// Option 1: Newer Swiggy API format (usually index 4)
const restaurants = cards?.find(
  (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
)?.card?.card?.gridElements?.infoWithStyle?.restaurants;


     console.log(restaurants);
     
      

      setListOfRestaurants(restaurants);
      setAllRestaurants(restaurants); // Store original full list
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };
 

  if (listOfRestaurants == null) {
    return <Shimmer />;
  }

  return (
    <div className="bg-gradient-to-b from-blue-200 to-white p-5" >
      
        

        <button
          className="w-72 h-12 border border-black rounded-md hover:shadow-zinc-600 shadow-md"
          onClick={() => {
            const topRated = allRestaurants.filter(
              (res) => res?.info?.avgRating > 4
            );
            setListOfRestaurants(topRated);
          }}
        >
          Top Rated Restaurants
        </button>

        <button
          className="ml-2 w-20 h-12 border border-black rounded-md hover:shadow-zinc-600 shadow-md"
          onClick={() => {
            setListOfRestaurants(allRestaurants); // Reset to original
            setSearchText(""); // Clear search field
          }}
        >
          Reset
        </button>
  

      <div className="flex flex-col justify-between p-5  ">
        {listOfRestaurants.map((restaurant) => (
           <Link key={restaurant.info.id} to={"/restaurants/" + restaurant?.info?.id }><RestaurantCard  resData={restaurant} /></Link>
        ))} 
      </div>
    </div>
  );
};

export default Body;
  