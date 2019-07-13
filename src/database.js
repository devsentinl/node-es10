import { MongoClient } from "mongodb";

const url = `mongodb://localhost:27017`;
const dbname = "init";

export async function connect() {
  try {
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true
    });
    const db = client.db(dbname)
    console.log(`db is connected`);
    
    return db;
  } catch (error) {
    console.log(error);
  }
}
