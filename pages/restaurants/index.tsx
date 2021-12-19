import React from "react";
import { useRestuarantsData } from "../../hooks/useRestuarantsData";

function RestaurantsList() {
  const { isLoading, data, isError, error, refetch } = useRestuarantsData();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container p-3">
      <button className="btn btn-primary m-3" onClick={() => refetch()}>
        Fetch Data
      </button>
      {data &&
        data.map((restaurant) => {
          return (
            <div key={restaurant._id}>
              <p>{restaurant.name}</p>
            </div>
          );
        })}
    </div>
  );
}

export default RestaurantsList;
