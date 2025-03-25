import React from "react";

export default function UserPosts() {
  const posts = ["Post 1", "Post 2", "Post 3"];

  return (
    <div>
      <h3>User Posts</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
}
