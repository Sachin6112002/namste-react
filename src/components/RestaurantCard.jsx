import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  if (!resData?.info) return null; // Prevent crashing on bad data

  const {
    name,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    cuisines,
    areaName
  } = resData.info;

  return (

   <div className="border border-sky-900 bg-slate-100 rounded-2xl  w-80  text-center flex flex-col m-5 p-5 line-clamp-1 hover:shadow-blue-800 shadow-md">
  <img src={IMG_URL + cloudinaryImageId} alt={name} className="w-72 border rounded-2xl h-72" />

<div>
    <h3 className=" font-bold text-2xl line-clamp-1">{name}</h3>
  <p className="line-clamp-1 text-xl">{cuisines?.join(", ")}</p>
  <p className="text-xl ">Rating: {avgRating}</p>
  <p className="text-xl">Cost: {costForTwo}</p>
  <p className="text-xl line-clamp-1">Area: {areaName}</p>
</div>
</div>

  );
};

export default RestaurantCard;
