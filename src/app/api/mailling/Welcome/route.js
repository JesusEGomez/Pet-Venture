import { NextResponse } from "next/server";
import { welcomeEmail } from "../handlerMail";

export async function POST(request) {
    const {email, displayName} = await request.json();
    console.log(email, displayName);

        const response = await welcomeEmail( email, displayName);

    return NextResponse.json(response);
}