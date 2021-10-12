import nextConnect from 'next-connect';
import { connectToDatabase } from "./../../utils/mongodb";

const handler = nextConnect()

.post(async(req, res)=>{
    const { db } = await connectToDatabase();
    let reqData = req.body
    reqData = JSON.parse(reqData);
  const ResCreation = await db
    .collection("b2cSales")
    .insertOne(reqData);
    res.status(200).json({ResCreation: "Success"})
})

export default (req, res) => handler.run(req, res) 