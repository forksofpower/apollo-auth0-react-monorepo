import React from "react";
import { Post } from "./graphql";
import usePosts from "./hooks/usePosts";

const PostList: React.FC = () => {
  const { posts, postsLoading } = usePosts();

  return (
    <>
      {!postsLoading
        ? posts.map((post: Post) => (
            <div key={post.id}>
              {post.content}
              <small>{post.account.email}</small>
            </div>
          ))
        : "loading posts..."}
    </>
  );
};

export default PostList;
