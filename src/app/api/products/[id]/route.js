import { connectionStr } from "../../../../../lib/mongo";
import { Product } from "../../../../../models/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  console.log(context);
  const { params } = context;
  console.log(params.id);

  let data = [];

  const { id } = params;
  try {
    await mongoose.connect(connectionStr);
    data = await Product.findOne({ _id: id });
    console.log(data);

    if (!data) {
      return NextResponse.json({ success: false, error: "Item not found" });
    }
  } catch (err) {
    data = { success: false, error: err.message };
  }
  return NextResponse.json({ result: data });
}
