import clientPromise from "../../../lib/mongodb";

export default async function addPost (req, res) {

  try {
      const client = await clientPromise;
      req.method = 'POST';
      const db = client.db('TechBlog').collection('Posts');
      const post = await db.insertOne({
            postTitle: req.body.blogTitle,
            date: req.body.blogDate,
            photo: req.body.blogPhoto,
            topic: req.body.blogTopic,
            postSnippet: req.body.blogSnippet,
            postBody: req.body.blogBody
      });
      res.json(post);
  } catch (e) {
      console.error(e);
      throw new Error(e).message;
  }
};