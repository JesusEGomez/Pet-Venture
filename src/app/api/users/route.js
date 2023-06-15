import { getAllUsers } from "@/app/firebase/firebaseConfig";
export async function GET() {
  const users = [];
  const querySnampshot = await getAllUsers();
  querySnampshot.forEach((doc) => {
    users.push(doc);
  });

  return new Response(JSON.stringify(users));
}
