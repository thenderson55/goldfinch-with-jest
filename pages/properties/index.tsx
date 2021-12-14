import { GetServerSideProps } from "next/types";
import React from "react";
import { connectToDatabase } from "../../lib/mongodb";

function PropertiesList({ properties }) {
  return (
    <div className="container p-3">
      {properties.map((property) => {
        return (
          <div key={property.id}>
            <p>{property.name}</p>
          </div>
        );
      })}
      <button className="btn btn-primary m-3">KindaCode.com</button>
      <button className="btn btn-warning m-3">Hello</button>

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

export const getServerSideProps: GetServerSideProps = async () => {
  const { db, dbGeo } = await connectToDatabase();

  const data = await db
    .collection("listingsAndReviews")
    .find({})
    .limit(20)
    .toArray();

  const dataGeo = await dbGeo
    .collection("shipwrecks")
    .find({})
    .limit(20)
    .toArray();

  const properties = JSON.parse(JSON.stringify(data));
  const shipwrecks = JSON.parse(JSON.stringify(dataGeo));
  console.log("SHIP", shipwrecks);

  return {
    props: {
      // data: session ? "My collection of blog posts" : "All blog posts",
      properties,
    },
  };
  // const session = await getSession(context);
  // console.log({ session });
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/api/auth/signin?callBackUrl=http://localhost:3000/blog",
  //       permanent: false,
  //     },
  //   };
  // }
};
