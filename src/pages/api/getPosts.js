import clientPromise from "../../../lib/mongodb";

export default async function handler (req, res) {
  try {
        console.log("FEtch started")
        const client = await clientPromise;
        const collection = client.db('TechBlog').collection('Posts');
        const data = await collection.find().toArray();
        res.json(data);
  } catch (e) {
        console.error(e);
        throw new Error(e).message;
  }
};