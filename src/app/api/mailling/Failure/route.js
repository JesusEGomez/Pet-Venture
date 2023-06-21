import { NextResponse } from "next/server";
import { failPurchase } from "../handlerMail";

export async function POST(request) {
  const { email, displayName } = await request.json();

  const response = await failPurchase(email, displayName);

  console.log(response);
  return NextResponse.json(response);
}
