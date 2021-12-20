import { NextApiRequest, NextApiResponse } from "next";
import { clientPromise } from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("sample_restaurants");

  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let newPost = await db.collection("posts").insertOne(bodyObject);
      res.json(newPost.ops[0]);
      break;
    case "GET":
      const restaurants = await db
        .collection("restaurants")
        .find({})
        .limit(10)
        .toArray();
      const data = JSON.parse(JSON.stringify(restaurants));
      // res.json(data);
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(401).json(data);
      }
      break;
  }
}
