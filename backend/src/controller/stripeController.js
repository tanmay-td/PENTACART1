const stripe = require("stripe")(
  "sk_test_51Msj8DSCce5ZBkiw3stNkI9ep3o5iB8Tp5EacSz2kVNetZD2YspLw4wn6RRP1j0m1YqPU08ASCf7RVosudmk8YtR001NsJa486"
);
const uuid = require("uuid").v4;

const createStripe = async (req, res) => {
  console.log("Request :", req.body);
  let error, status;
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const key = uuid();
    const paymentIntent = await stripe.paymentIntents.create(
      {
        amount: product.cost * 100,
        currency: "inr",
        customer: customer.id,
        payment_method_types: ["card"],
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        setup_future_usage: "on_session",
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      { idempotencyKey: key }
    );
    console.log("Charge:", { paymentIntent });
    status = "success";
    console.log("Shipping : ", paymentIntent.shipping);
  } catch (error) {
    console.log(error);
    status = "failure";
  }
  res.json({ error, status });
};
module.exports = { createStripe };
