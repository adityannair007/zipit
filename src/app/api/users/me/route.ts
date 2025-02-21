import { dbConnect } from "@/lib/dbconnect";
import User from "@/lib/userModel";
import { NextRequest, NextResponse } from "next/server";
import { getTokenData } from "@/utils/getTokenData";
dbConnect();

export async function POST(request: NextRequest) {
  const userId = await getTokenData(request);
  const user = await User.findOne({ _id: userId }).select("-password");
  return NextResponse.json({
    message: "User found",
    data: user,
  });
}
