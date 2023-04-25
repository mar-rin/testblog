import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    const uri = 'mongodb://localhost:27017/TechBlog';
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
    console.log("URI: " + uri);

    try {
        await client.connect();
    
        const database = client.db('TechBlog');
        const collection = database.collection('Posts');
        const result = await collection.find({}).toArray();
        res.json({ status: 200, data: result });
        console.log("THis is MongoDB data object: " + res.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        await client.close();
    }
  }