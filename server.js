const cors = require("cors");
const express = require("express");
var fs = require('fs');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const uuid = require("uuid/v4");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.SERVER_PORT || 3000;
const INDEX = './public/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const { Server } = require('ws');

const wss = new Server({ server });

wss.on('connection', (wss) => {
  console.log('Client connected');
  wss.on('close', () => console.log('Client disconnected'));
});

setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);

app.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { token, product } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = product.id;
    const charge = await stripe.charges.create(
      {
        amount: product.amount,
        currency: "usd",
        customer: customer.id,
        receipt_email: customer.email,
        description: `${product.cupType} - ${product.quantity} - ${product.topColor} - ${product.bottomColor} - ${product.textColor} - ${product.textLine1}-${product.textLine2}-${product.textLine3}-${product.textLine4} - ${product.additionalInfo}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

app.listen(process.env.PORT);
