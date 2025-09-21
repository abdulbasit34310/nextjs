import React from 'react';

export default async function Blog(props) {
  const user = await props.params;
  return (
    <div>
      <h1>Blog Page: {user.slug}</h1>
    </div>
  )
}