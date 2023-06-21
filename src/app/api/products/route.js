import { getAllProducts } from "@/app/Firebase/firebaseConfig";
export async function GET() {
  const products = [];
  const querySnampshot = await getAllProducts();
  querySnampshot.forEach((doc) => {
    products.push(doc);
  });

  return new Response(JSON.stringify(products));
}
