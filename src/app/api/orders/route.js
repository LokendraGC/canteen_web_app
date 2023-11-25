import Order from "../../../../models/orders.js";
import { connectionStr } from "../../../../lib/mongo";
import mongoose from "mongoose";
import { NextResponse } from "next/server.js";
await mongoose.connect(connectionStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
export async function POST(req, res) {
  console.log("--------Hait");

  const { method } = req;
  console.log("------", method);
  const payload = await req.json();
  if (method === "POST") {
    try {
      //   await mongoose.connect(connectionStr);

      let order = new Order(payload);
      // console.log(payload);
      const result = await order.save();

      return NextResponse.json({ message: result }, { status: 201 });
    } catch (err) {
      return NextResponse.json({ error: err.message });
    }
  }
}
export async function GET(req, res) {
  try {
    const orders = await Order.find().exec();

    return NextResponse.json({ message: orders });
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
