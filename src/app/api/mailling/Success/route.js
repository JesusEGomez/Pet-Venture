import { NextResponse } from "next/server";
import { successPurchase } from "../handlerMail";

export async function POST(request) {
    const {email, displayName} = await request.json();

        const response = await successPurchase( email, displayName);

    return NextResponse.json(response);


}