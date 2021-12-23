import { NextApiRequest, NextApiResponse } from "next";
import { clientPromise } from "../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("sample_geospatial");

  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let newPost = await db.collection("posts").insertOne(bodyObject);
      res.json(newPost.ops[0]);
      break;
    case "GET":
      const shipwrecks = await db
        .collection("shipwrecks")
        .find({})
        .limit(2)
        .toArray();
      const data = JSON.parse(JSON.stringify(shipwrecks));
      res.json(data);
      break;
  }
}

// async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { dbGeo } = await connectToDatabase();

//   const dataGeo = await dbGeo
//     .collection("shipwrecks")
//     .find({})
//     .limit(20)
//     .toArray();
//   return res.json(JSON.parse(JSON.stringify(dataGeo)));
// }

// export default handler;
