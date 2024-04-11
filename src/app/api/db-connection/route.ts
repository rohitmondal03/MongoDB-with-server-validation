"use server"

import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

import { detailsModel } from "../../../../models/demo-schema"


export async function GET(res: NextResponse, req: NextRequest) {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "")
    return new NextResponse("Connected of DB")
  } catch (error) {
    return new NextResponse("Error connecting MongoDB")
  }
}