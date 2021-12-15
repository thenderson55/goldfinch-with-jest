import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../lib/mongodb";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();
  const data = req.query;

  const response = await db.collection("bookings").insertOne(data);

  res.json(response);
}

export default handler;
