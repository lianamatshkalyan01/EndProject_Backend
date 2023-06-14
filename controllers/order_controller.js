const { Order, Products, Cartitems } = require('../models');
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(stripeSecretKey);

const setupStripe = async (
  email,
  product_id,
  product_name,
  price,
  baseUrl,
  encryptedString
) => {
  return await stripe.checkout.sessions.create({
    line_items:[{
      price_data:{
        currency: "usd",
        product_data: {
          name: product_name},
        unit_amount: Number((price * 100).toFixed(2))
      },
      quantity: 1
    }],
    mode:"payment",
    success_url: `${baseUrl}/api/package/afterPayment/${encryptedString}`,
    cancel_url: `${baseUrl}`,
  });
};

function get_order(req, res) {
  Order.findAll()
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

function get_order_id(req, res) {
  const { id } = req.params;
  Order.findOne({ where: { id } })
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

async function post_order(req, res) {
  const { Cartitems } = req.body;
  console.log(Cartitems, '555555555555555555555555555555555')

  const stripeData = {
    email: "liana.matshkalyan01@gmail.com",
    product_id: 36,
    product_name: "Azithromycin",
    price: 5000,
    baseUrl: "http://localhost:5000",
    encryptedString: "LLL",
  };

  console.log('Stripe Secret Key:', stripeSecretKey);

  try {
    const session = await setupStripe(
      stripeData.email,
      stripeData.product_id,
      stripeData.product_name,
      stripeData.price,
      stripeData.baseUrl,
      stripeData.encryptedString
    );

    console.log(session)
    res.send({url:session.url})
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  get_order,
  get_order_id,
  post_order
};
