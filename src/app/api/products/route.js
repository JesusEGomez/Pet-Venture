import { getProductsTrue } from "@/app/Firebase/firebaseConfig";
export async function GET() {
  const products = [];
  const querySnampshot = await getProductsTrue();
  querySnampshot.forEach((doc) => {
    products.push(doc);
  });

  return new Response(JSON.stringify(products));
}
