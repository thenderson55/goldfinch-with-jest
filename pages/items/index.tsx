import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useItemsData } from "../../hooks/useItemsData";

function ItemsList() {
  const router = useRouter();

  // console.log("Router:", router);
  const [itemName, setItemName] = useState("");
  const [artistName, setArtistName] = useState("");

  const [limit, setLimit] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, data, isError, error, refetch } = useItemsData(
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

  const addItem = async () => {
    const data = await fetch(`http://localhost:3000/api/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: itemName,
        artist: artistName,
      }),
    });
    console.log("RESPONSE", data);
    const response = await data.json();
    console.log("Data", response);
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
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="text"
        value={artistName}
        onChange={(e) => setArtistName(e.target.value)}
      />
      <button className="btn btn-warning m-3" onClick={() => addItem()}>
        Add Item
      </button>
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
        data.data.map((item) => {
          return (
            <div key={item._id} style={{ marginTop: 20 }}>
              {item.name}
              <br />
              <Link href={`/items/${item._id}`}>
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

export default ItemsList;
