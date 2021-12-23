import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAddItemData, useItemsData } from "../../hooks/useItemsData";
import { connectToDatabase } from "../../lib/mongodb";

export const getServerSideProps: GetServerSideProps = async () => {
  const { db } = await connectToDatabase();

  const data = await db.collection("items").find({}).limit(20).toArray();

  const items = JSON.parse(JSON.stringify(data));

  return {
    props: {
      items,
    },
  };
};

function ItemsList({ items }) {
  const router = useRouter();

  // console.log("Router:", router);
  const [itemName, setItemName] = useState("");
  const [artistName, setArtistName] = useState("");

  const [limit, setLimit] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  // const { isLoading, data, isError, error, refetch } = useItemsData(
  //   limit,
  //   pageNumber
  // );

  const { mutate: addItem } = useAddItemData();

  const handleAddItemClick = () => {
    const item = {
      itemName,
      artistName,
    };
    addItem(item);
  };

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

  const numberOfPages = Math.ceil(items?.total / limit);

  const paginationHandler = (newPage) => {
    router.push(router.pathname + `?limit=${limit}` + `&page=${newPage}`);
  };

  const limitHandler = (newLimit) => {
    router.push(router.pathname + `?limit=${newLimit}` + `&page=${pageNumber}`);
  };

  // if (isLoading) {
  //   return <h2>Loading...</h2>;
  // }
  // if (isError) {
  //   return <h2>{error}</h2>;
  // }

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
      <button className="btn btn-warning m-3" onClick={handleAddItemClick}>
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
            // refetch();
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
            // refetch();
          }}
          disabled={limit === 10}
        >
          +
        </button>
      </div>
      <h3>Total pages: {numberOfPages}</h3>
      {items?.map((item) => {
        return (
          <div key={item.name} style={{ marginTop: 20 }}>
            {item.name}
            <br />
            {item.artist}
            <br />
            {/* <Link href={`/items/${item._id}`}>
              <a>More info</a>
            </Link> */}
          </div>
        );
      })}
      {/* {data.data &&
        data.data.map((item) => {
          return (
            <div key={item._id} style={{ marginTop: 20 }}>
              {item.name}
              <br />
              {item.artist}
              <br />
              <Link href={`/items/${item._id}`}>
                <a>More info</a>
              </Link>
            </div>
          );
        })} */}
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
            // refetch();
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
