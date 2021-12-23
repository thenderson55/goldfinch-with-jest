import { NextApiRequest, NextApiResponse } from "next";
import { clientPromise, connectToDatabase } from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  // const { db } = await connectToDatabase();
  const db = client.db("goldFinchDb");
  // console.log("DB: ", db);

  const limit = parseInt(req.query.limit as string);
  const page = parseInt(req.query.page as string);

  switch (req.method) {
    case "POST":
      let bodyObject = req.body;
      console.log("Body Object:", bodyObject);
      // const response = await db.collection("bookings").insertOne(data);

      // res.json(response);
      let newItem = await db.collection("items").insertOne(bodyObject);
      console.log("Res Object:", newItem);

      res.json(newItem);
      break;
    case "GET":
      const total = await db.collection("items").find().count();

      const items = await db
        .collection("items")
        .find({})
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .toArray();
      const data = JSON.parse(JSON.stringify(items));

      if (data) {
        res.status(200).json({ data, total });
      } else {
        res.status(401).json(data);
      }
      break;
  }
}
