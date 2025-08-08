import React from 'react';
import RestaurantCard from './RestaurantCard'; // Assuming it renders a shimmer when no data is passed
import Shimmercard from './Shimmercard';

const Shimmer = () => {
  return (
    <div className="shim-body">
      
      <div className="shim-res-container">
        {Array(20).fill("").map((_, index) => (
          <Shimmercard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
