import { NextApiRequest, NextApiResponse } from "next";
import { clientPromise } from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("sample_restaurants");

  const limit = parseInt(req.query.limit as string) || 5;
  const page = parseInt(req.query.page as string) || 1;

  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      console.log("Body Object:", bodyObject);
      // let newPost = await db.collection("items").insertOne(bodyObject);
      // res.json(newPost.ops[0]);
      break;
    case "GET":
      const total = await db.collection("restaurants").find().count();

      const restaurants = await db
        .collection("restaurants")
        .find({})
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .toArray();
      const data = JSON.parse(JSON.stringify(restaurants));

      if (data) {
        res.status(200).json({ data, total });
      } else {
        res.status(401).json(data);
      }
      break;
  }
}
