import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { clientPromise } from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const { itemId } = req.query;

  switch (req.method) {
    case "GET":
      const item = await client
        .db("goldFinchDb")
        .collection("items")
        .findOne({ _id: new ObjectId(`${itemId}`) });

      const data = JSON.parse(JSON.stringify(item));
      res.status(200).json({ ...data, createdAt: item._id.getTimestamp() });

      break;
  }
}
