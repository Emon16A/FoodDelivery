
import toast from "react-hot-toast";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51OAf0KIfxOwE1Z4nkQz990FrFh9GOq82aqM6gF0RloWzH6hfsoDcU4uLWNaqGfiZAzt4oONRKOMt9ZY4OIlpn4lp00GdufjabT"
);

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        line_items: req.body.map((item) => {
          const img = item.image.asset._ref;
          const newImage = img
            .replace(
              "image-",
              "https://cdn.sanity.io/images/uti3i56z/production/"
            )
            .replace("-jpg",".jpg");

          return {
            price_data: {
              currency: "bdt",
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: false,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cart`,
      };

      const session = await stripe.checkout.sessions.create(params);
      console.log("Stripe Session Created:", session);

      res.status(200).json(session);
    } catch (error) {
      console.error("An error occurred during checkout:", error);
      toast.error(
        `Error processing payment: ${error.message}. Please try again.`
      );
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
}
