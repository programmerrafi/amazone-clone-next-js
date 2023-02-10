const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const transformedItem = items.map((item) => ({
    quantity: item.quantity,
    price_data: {
      currency: "usd",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["BD", "IN", "CA", "US"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 700, currency: "usd" },
          display_name: "Next-Day Shipping",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 1 },
            maximum: { unit: "business_day", value: 3 },
          },
        },
      },
    ],
    line_items: transformedItem,
    mode: "payment",
    success_url: `${process.env.HOST}/seccess`,
    cancel_url: `${process.env.HOST}/failed`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
      titles: JSON.stringify(items.map((item) => item.title)),
    },
  });

  res.status(200).json({ id: session.id });
};
