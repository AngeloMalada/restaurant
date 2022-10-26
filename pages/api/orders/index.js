import dbConnect from "../../../utils/mongo";
import Order from "../../../models/Order";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  // Get data from your database
  if (method === "POST") {
    //find orders by customer email
    try {
      const orders = await Order.find({ customer: req.body.email });
      res.status(200).json(orders);
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }

  // Create data in your database
  if (method === "POST") {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default handler;
