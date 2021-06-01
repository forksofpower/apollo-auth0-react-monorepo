import React from "react";
import {
  Post,
  PostInput,
  usePostCreateMutation,
  usePostDestroyMutation,
  usePostsListAllQuery,
  usePostUpdateMutation,
} from "../graphql";

const usePosts = () => {
  const {
    data: postData,
    loading: postsLoading,
    error: postsError,
  } = usePostsListAllQuery();

  const [deletedPostIds, setDeletedPostIds] = React.useState<number[]>([]);
  const [postCreateMutation] = usePostCreateMutation();
  const [postUpdateMutation] = usePostUpdateMutation();
  const [postDestroyMutation] = usePostDestroyMutation();

  const createPost = async (post: PostInput, refetch = true): Promise<void> => {
    if (refetch) {
      await postCreateMutation({
        refetchQueries: ["PostsListAll"],
        variables: {
          input: {
            post,
          },
        },
      });
    } else {
      await postCreateMutation({
        variables: {
          input: {
            post,
          },
        },
      });
    }
  };

  const updatePost = async (post: PostInput) => {
    await postUpdateMutation({
      refetchQueries: ["CardsListAll"],
      variables: {
        input: {
          post,
        },
      },
    });
  };

  const deletePost = async (id: number) => {
    setDeletedPostIds([...deletedPostIds, id]);
    await postDestroyMutation({
      variables: { input: { postId: id } },
    });
  };

  let loadedPosts: Post[] = [];

  if (postData) {
    loadedPosts = postData.postsListAll.posts
      .map((post) => post as Post)
      .filter((post) => !deletedPostIds.includes(post.id));
  }
  return {
    posts: loadedPosts,
    postsLoading,
    postsError,
    createPost,
    updatePost,
    deletePost,
  };
};

export default usePosts;
