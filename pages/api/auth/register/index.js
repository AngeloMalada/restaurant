import mongoose from "mongoose";
import User from "../../../../models/User";
import dbConnect from "../../../../utils/mongo";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  // Get data from your database

  // Create data in your database
  if (method === "POST") {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
