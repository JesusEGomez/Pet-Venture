import { NextResponse } from "next/server";
import { successPurchase } from "../handlerMail";

export async function POST(request) {
  const data = await request.json();
  console.log("Success", data);
  const { email, displayName } = data;

  const response = await successPurchase(email, displayName);

  return NextResponse.json(response);
}
