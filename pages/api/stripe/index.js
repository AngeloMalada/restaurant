import { userAgent } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const params = {
        submit_type: "pay",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        //add email from user
        customer_email: req.body.user.user.email,
        shipping_address_collection: {
          allowed_countries: ["US", "CA"],
        },
        shipping_options: [
          { shipping_rate: "shr_1Lv4qsI8thLsQFZeMO9hMZnP" },
          { shipping_rate: "shr_1Lv4rDI8thLsQFZeDxLFQA7L" },
        ],
        line_items: req.body.cart.products.map((product) => {
          const image = product.image;

          //map over extra ingredients and extract text to display in stripe
          const extraIngredients = product.extraIngreadients.map(
            (extraIngredient) => {
              return extraIngredient.text;
            }
          );

          return {
            price_data: {
              currency: "eur",
              product_data: {
                name: product.title,
              },
              unit_amount: product.price * 100,
            },
            quantity: product.quantity,
            //add extra ingredients to description if not empty string
            description: extraIngredients.join(", ") || "Nema dodataka",
          };
        }),
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
        //metadata
        metadata: {
          titles: JSON.stringify(
            req.body.cart.products.map((product) => product.title)
          ),
          //add extra ingredients to metadata
          extraIngredients: JSON.stringify(
            req.body.cart.products.map((product) => {
              return product.extraIngreadients.map(
                // (extraIngredient) => extraIngredient.text
                //add extra ingredient text and id to metadata
                (extraIngredient) => {
                  return {
                    text: extraIngredient.text,
                    id: extraIngredient._id,
                  };
                }
              );
            })
          ),
        },
      };
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
      console.log(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
