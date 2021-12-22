import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRestuarantsData } from "../../hooks/useRestuarantsData";

function RestaurantsList() {
  const router = useRouter();

  // console.log("Router:", router);

  const [limit, setLimit] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, data, isError, error, refetch } = useRestuarantsData(
    limit,
    pageNumber
  );

  useEffect(() => {
    if (router.query.limit) {
      const queryLimit = parseInt(router.query.limit as string);
      setLimit(queryLimit);
    }
    if (router.query.page) {
      const queryPage = parseInt(router.query.page as string);
      setPageNumber(queryPage);
    }
  }, [router]);

  const numberOfPages = Math.ceil(data?.total / limit);

  const paginationHandler = (newPage) => {
    router.push(router.pathname + `?limit=${limit}` + `&page=${newPage}`);
  };

  const limitHandler = (newLimit) => {
    router.push(router.pathname + `?limit=${newLimit}` + `&page=${pageNumber}`);
  };

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
            limitHandler(limit - 1);
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
            setLimit((limit) => limit + 1);
            limitHandler(limit + 1);
            refetch();
          }}
          disabled={limit === 10}
        >
          +
        </button>
      </div>
      <h3>Total pages: {numberOfPages}</h3>
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
            setPageNumber((page) => page - 1);
            paginationHandler(pageNumber - 1);
          }}
          disabled={pageNumber === 1}
        >
          PREV
        </button>
        <span>Page number: {pageNumber}</span>
        <button
          className="btn btn-primary m-3"
          onClick={() => {
            setPageNumber((page) => page + 1);
            paginationHandler(pageNumber + 1);
            refetch();
          }}
          disabled={pageNumber === numberOfPages}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default RestaurantsList;
