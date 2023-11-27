import Order from "../../../../../models/orders.js";
import { connectionStr } from "../../../../../lib/mongo.js";
import mongoose from "mongoose";
import { NextResponse } from "next/server.js";

export async function GET(req, context) {
  // console.log(context);
  const { params } = context;
  // console.log(params.id);

  let data = [];

  const { id } = params;
  try {
    await mongoose.connect(connectionStr);
    data = await Order.findOne({ _id: id });
    // console.log(data);

    if (!data) {
      return NextResponse.json({ success: false, error: "Item not found" });
    }
  } catch (err) {
    data = { success: false, error: err.message };
  }
  return NextResponse.json({ result: data });
}


  export async function PUT(req,res){
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

  // if (method === "DELETE") {
  // }



