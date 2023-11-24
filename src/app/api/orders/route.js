import Order from "../../../../models/orders.js";
import { connectionStr } from "../../../../lib/mongo";
import mongoose from "mongoose";
import { NextResponse } from "next/server.js";


export async function handler(req, res) {
    console.log("Hait")
    console.log(req)
    
    await mongoose.connect(connectionStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const { method } = req;
  const payload = await req.json();

  if (method === "GET") {
    try {
      const orders = await Order.find().exec();

      return NextResponse.json({ message: orders });
    } catch (err) {
      return NextResponse.json({ error: err.message });
    }
  }

  if (method === "POST") {
    try {
    //   await mongoose.connect(connectionStr);

     let order = new Order(payload);
     const result = await order.save();

      return NextResponse.json({ message: result });
    } catch (err) {
      return NextResponse.json({ error: err.message });
    }
  }
}
