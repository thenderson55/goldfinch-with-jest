import Link from "next/link";
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
            <div key={restaurant._id} style={{ marginTop: 20 }}>
              {restaurant.name}
              <br />
              <Link href={`/restaurants/${restaurant._id}`}>
                <a>More info</a>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default RestaurantsList;
