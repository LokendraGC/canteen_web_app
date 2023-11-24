import Order from "../../../../../models/orders.js";
import { connectionStr } from "../../../../lib/mongo";
import mongoose from "mongoose";
import { NextResponse } from "next/server.js";

export async function handler(req, res) {
  await mongoose.connect(connectionStr);
  const { method } = req;

  if (method === "GET") {
    const { params } = context;
    let data = [];
    const { id } = params;

    try {
      data = await Order.findOne({ _id: id });

      if (!data) {
        return NextResponse.json({ success: false, error: "Item not found" });
      }
    } catch (err) {
      data = { success: false, error: err.message };
    }
    return NextResponse.json({ result: data });
  }

  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (order) {
        return NextResponse.json({ success: true, message: order });
      }
    } catch (err) {
      return NextResponse.json({ error: err.message });
    }
  }

  if (method === "DELETE") {
  }
}

export default handler;
