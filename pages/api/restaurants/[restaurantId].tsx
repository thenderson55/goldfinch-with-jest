import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { clientPromise } from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const { restaurantId } = req.query;

  switch (req.method) {
    case "GET":
      const restaurant = await client
        .db("sample_restaurants")
        .collection("restaurants")
        .findOne({ _id: new ObjectId(`${restaurantId}`) });

      const data = JSON.parse(JSON.stringify(restaurant));
      res.status(200).json(data);

      break;
  }
}
