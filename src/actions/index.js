export function selectedPost(post, flag) {
  // console.log("PRINTING FROM ACTION select action");
  // console.log(post);
  return {
    type: "SELECT_POST",
    payload: {
      post: post,
      viewList: flag
    }
  };
}

export function addPost(post) {
  console.log("AddPost");
  return {
    type: "ADD_POST",
    payload: post
    // payload: [
    //   {
    //     postTitle: "postTitle test",
    //     postCategory: "postCat test",
    //     postcomment: "postcomment test"
    //   }
    // ]

    // {
    //   postTitle: "postTitle test",
    //   postCategory: "postCat test",
    //   postcomment: "postcomment test"
    // }
  };
}

export function deletePost(id) {
  console.log("DeletePost", id);
  return {
    type: "DELETE_POST",
    payload: id
  };
}
