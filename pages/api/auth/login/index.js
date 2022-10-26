import mongoose from "mongoose";
import User from "../../../../models/User";
import dbConnect from "../../../../utils/mongo";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  // Get data from your database

  // get user from database by email
  if (method === "POST") {
    try {
      const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
      });
      if (!user) {
        return res.status(404).json({ success: false });
      }
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}
