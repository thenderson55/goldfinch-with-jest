import { GetServerSideProps } from "next/types";
import React from "react";
import { connectToDatabase } from "../../lib/mongodb";

export const getServerSideProps: GetServerSideProps = async () => {
  const { db } = await connectToDatabase();

  const data = await db
    .collection("listingsAndReviews")
    .find({})
    .limit(20)
    .toArray();

  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: {
      properties,
    },
  };
};

function PropertiesList({ properties }) {
  const bookProperty = async (id) => {
    const data = await fetch(
      `http://localhost:3000/api/airbnb/book?property_id=${id}`
    );
    console.log("RESPONSE", data);
    const response = await data.json();
    console.log("Data", response);
  };

  return (
    <div className="container p-3">
      {properties.map((property) => {
        return (
          <div key={property._id}>
            <p>{property.name}</p>
            <p>ID: {property._id}</p>
            <button
              className="btn btn-warning m-3"
              onClick={() => bookProperty(property._id)}
            >
              BOOK
            </button>
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
