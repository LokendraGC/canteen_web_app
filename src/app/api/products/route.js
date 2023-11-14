import { connectionStr } from "../../../../lib/mongo";
import { Product } from "../../../../models/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionStr);
    data = await Product.find();
    console.log(data);
  } catch (err) {
    data = { succsess: false, error: err.message };
  }

  return NextResponse.json({ result: data });
}


export async function POST(req) {
  console.log(req);
  const { method } = req;
  const payload = await req.json();

  if (method === "POST") {
    try {
      await mongoose.connect(connectionStr);
      let product = new Product(payload);
      const result = await product.save();
      return NextResponse.json({ message: result });
    } catch (err) {
      return NextResponse.json({ error: err.message });
    }
  }
}
