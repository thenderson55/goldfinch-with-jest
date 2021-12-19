import { GetServerSideProps } from "next/types";
import React from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";

const STALE_TIME = 1000;

const fetchShipwrecks = async () => {
  const data = await fetch("http://localhost:3000/api/shipwrecks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await data.json();
  return response;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  // prefetchInfiniteQuery
  await queryClient.prefetchQuery("shipwrecks", fetchShipwrecks, {
    staleTime: STALE_TIME,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

function PropertiesList() {
  const { data } = useQuery("shipwrecks", fetchShipwrecks, {
    staleTime: STALE_TIME,
  });

  return (
    <div className="container p-3">
      {data.map((shipwreck) => {
        return (
          <div key={shipwreck._id}>
            <p>{shipwreck.chart}</p>
          </div>
        );
      })}
      <button className="btn btn-primary m-3">KindaCode.com</button>

      <div className="dropdown m-3">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          id="dropdownMenuButton1"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Option 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Option 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Option 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PropertiesList;
