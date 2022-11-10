import { buffer } from "micro";
import dbConnect from "../../utils/mongo";
import Order from "../../models/Order";

//connect to stripe
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;
export default async function handler(req, res) {
  //select items from cart

  await dbConnect();
  const { method } = req;

  if (method === "POST") {
    //create order in database after successful payment
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const order = await Order.create({
        title: JSON.parse(session.metadata.titles),
        extras: JSON.parse(session.metadata.extraIngredients),
        customer: session.customer_details.email,
        address: session.shipping.address.line1,
        total: session.amount_total / 100,
        status: session.metadata.status,
      });

      res.status(200).json(order);
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
