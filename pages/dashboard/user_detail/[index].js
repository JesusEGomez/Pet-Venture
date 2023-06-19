// import React from "react";

// function userDetail({ productId, product }) {
//   return (
//     <div>
//       <div>id: item.id,</div>
//       <div>col1: item.username,</div>
//       <div>col2: item.displayName,</div>
//       <div>col3: item.uid,</div>
//       <div>col4: item.processCompleted,</div>
//       <div>col5: item.profilePicture,</div>
//     </div>
//   );
// }

// export default userDetail;

// export async function getServerSideProps(context) {
//   const { id } = context.query;
//   const response = await axios.get(
//     `http://localhost:3000/api/productsById?id=${id}`
//   );
//   const product = response.data;

//   return {
//     props: {
//       productId: id,
//       product,
//     },
//   };
// }
//& hay que hacer una ruta de userbyid!!!!!
