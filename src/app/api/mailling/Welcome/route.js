import { NextResponse } from "next/server";
import { welcomeEmail } from "../handlerMail";

export async function POST(request) {
  const data = await request.json();
  console.log("Welcome", data);
  const { email, displayName } = data;

  const response = await welcomeEmail(email, displayName);

  return NextResponse.json(response);
}
