const { Order, Products, Cartitems } = require('../models');
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(stripeSecretKey);

const setupStripe = async (
  line_items,
  baseUrl,
) => {
  return await stripe.checkout.sessions.create({
    line_items,
    mode:"payment",
    success_url: `${baseUrl}/user`,
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
  const { cartItems } = req.body;
  console.log(cartItems, '555555555555555555555555555555555')

  const line_items = cartItems.map((item)=>{
    return {
      price_data:{
        currency:"usd",
        product_data:{
          name:item.Product.name,
          // Images: [
          //   item.Product.img
          // ],
          metadata:{
            product_id: item.product_id
          }
        },
        unit_amount: Number((item.Product.price * 100).toFixed(2))
      },
      quantity: item.quantity
    }
  })


  console.log('Stripe Secret Key:', stripeSecretKey);

  try {
    const session = await setupStripe(
      line_items,
      "http://localhost:5173"
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
