import React, { useEffect } from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { IMG_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo);

  const regularCards =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log(regularCards);

  const menuCard = regularCards?.find((c) => c?.card?.card?.itemCards)?.card
    ?.card;

  const { itemCards } = menuCard || {};

  console.log(itemCards);

  return (
    <div className=" m-8 ">
    
        {itemCards.map((item) => (
          <div className="w-full lg:h-72 flex lg:flex-row flex-col border border-blue-500 sm:items-center" key={item.card.info.id}>
            <img src={IMG_URL + item.card.info.imageId} alt="IMG" className="h-60 m-5 w-56  " />
           <div className="mt-5">
             <p className="text-2xl font-bold">{item.card.info.name}</p>
            <p className="text-xl">Price - {item.card.info.defaultPrice || item.card.info.price}$</p>
            <p className="text-lg">{item.card.info.description}</p>
           </div>

          </div>
        ))}
      </div>
  
  );
};

export default RestaurantMenu;
