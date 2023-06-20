import { NextResponse } from "next/server";
import { getAllProducts } from "@/app/Firebase/firebaseConfig";
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    const products = [];
    const result = [];

    const querySnampshot = await getAllProducts();
    querySnampshot.forEach((doc) => {
      products.push(doc);
    });

    products.forEach((obj) => {
      if (name?.toUpperCase() === obj.name?.toUpperCase()) {
        result.push(obj);
      }
    });

    return new NextResponse.json(result);
  } catch (error) {
    return new NextResponse(error);
  }
}
