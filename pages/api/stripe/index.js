import Stripe from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET);

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    try {
      const params = {
        submit_type: "pay",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1Lv4qsI8thLsQFZeMO9hMZnP" },
          { shipping_rate: "shr_1Lv4rDI8thLsQFZeDxLFQA7L" },
        ],
        line_items: req.body.products.map((product) => {
          const image = product.image;
          return {
            price_data: {
              currency: "eur",
              product_data: {
                name: product.title,
              },
              unit_amount: product.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: product.quantity,
          };
        }),
        mode: "payment",
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      };
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
