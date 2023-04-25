import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function deletePost (req, res) {
  try {
      console.log('deletePost function executed')
      const client = await clientPromise;
      console.log("Body: " + req.body);

      const db = client.db('TechBlog').collection('Posts');
      const post = await db.deleteOne({
        postTitle: req.body
      });

      res.json(post);
      console.log(res)
  } catch (e) {
      console.error(e);
      throw new Error(e).message;
    }
};