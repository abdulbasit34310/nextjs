import React from 'react';
// Dynamic route example
export default async function Blog(props) {
  const user = await props.params;
  return (
    <div>
      <h1>Blog Page: {user.slug}</h1>
    </div>
  )
}

// --- Dynamic Routing in Client Component ---
// "use client"

// import { use } from "react";

// const SingleProfilePost = (props) => {
//   const user = use(props.params);
//   //   console.log(user);

//   return (
//     <h1>
//       user : {user.username}, PostId : {user.postId}
//     </h1>
//   );
// };
