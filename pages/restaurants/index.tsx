import Link from "next/link";
import React, { useState } from "react";
import { useRestuarantsData } from "../../hooks/useRestuarantsData";

function RestaurantsList() {
  const [limit, setLimit] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, data, isError, error, refetch } = useRestuarantsData(
    limit,
    pageNumber
  );
  const numberOfPages = Math.ceil(data?.total / limit);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container p-3">
      {/* <button className="btn btn-primary m-3" onClick={() => refetch()}>
        Fetch Data
      </button> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="btn btn-primary m-3"
          onClick={() => {
            setLimit((limit) => limit - 1);
            refetch();
          }}
          disabled={limit === 1}
        >
          -
        </button>
        <span>Hits per page: {limit}</span>
        <button
          className="btn btn-primary m-3"
          onClick={() => {
            setLimit((page) => page + 1);
            refetch();
          }}
          disabled={limit === 10}
        >
          +
        </button>
      </div>
      <p>Total pages: {numberOfPages}</p>
      {data.data &&
        data.data.map((restaurant) => {
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
      <button
        className="btn btn-primary m-3"
        onClick={() => setPageNumber((page) => page - 1)}
        disabled={pageNumber === 1}
      >
        PREV
      </button>
      <button
        className="btn btn-primary m-3"
        onClick={() => {
          setPageNumber((page) => page + 1);
          refetch();
        }}
        disabled={pageNumber === numberOfPages}
      >
        NEXT
      </button>
    </div>
  );
}

export default RestaurantsList;
