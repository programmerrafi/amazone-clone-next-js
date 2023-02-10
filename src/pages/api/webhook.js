import { buffer } from "micro";
import * as admin from "firebase-admin";

// Secure a connection to firebase
const serviceAccount = require("../../../permission.json");

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

// Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecurit = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session) => {
  console.log("Fulfilling Order!!!");

  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      title: JSON.parse(session.metadata.titles),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SUCCESS: Order ${session.id} has been added to DB!`);
    });
};

export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    // Verify (came from stripe)
    try {
      event = await stripe.webhooks.constructEvent(
        payload,
        sig,
        endpointSecurit
      );
    } catch (e) {
      console.log("ERROR", e.message);
      return res.status(400).send({ message: "Webhook error: " + e.message });
    }

    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // Fulfill the order
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((e) =>
          res.status(400).send({ message: "WEBHOOK_ERROR: " + e.message })
        );
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
