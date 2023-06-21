import { NextResponse } from "next/server";
import { getAllProducts } from "@/app/Firebase/firebaseConfig";
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const products = [];
  const result = [];

  const id = searchParams.get("id");

  if (id) {
    const querySnampshot = await getAllProducts();
    querySnampshot.forEach((doc) => {
      products.push(doc);
    });

    products.forEach((obj) => {
      if (id === obj.id) {
        result.push(obj);
      }
    });

    return NextResponse.json(result);
  } else {
    return NextResponse.json({ error: "faltan datos" });
  }
}
