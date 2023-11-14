import { connectionStr } from "../../../../lib/mongo";
import { Product } from "../../../../models/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// Assuming you're using Next.js API routes
export async function GET(context) {
  const {
    method,
    query: { id },
  } = context;
  let data = [];

  if (method === "GET") {
    try {
      await mongoose.connect(connectionStr);
      data = await Product.findById(id);
      console.log(data);
    } catch (err) {
      data = { success: false, error: err.message };
    }

    return NextResponse.json({ result: data });
  }
}


export async function PUT(req) {
  console.log(req);
  const {
    method,
    query: { id },
  } = req;
  const payload = await req.json();

  if (method === "PUT") {
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

export async function DELETE(req) {
  console.log(req);
  const { method } = req;
  const payload = await req.json();

  if (method === "DELETE") {
    try {
      await mongoose.connect(connectionStr);
      let product = new Product(payload);
      const result = await product.DELETE();
      return NextResponse.json({ message: result });
    } catch (err) {
      return NextResponse.json({ error: err.message });
    }
  }
}
