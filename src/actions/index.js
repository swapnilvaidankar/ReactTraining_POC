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

export function addPost() {
  console.log("AddPost");
  return {
    type: "ADD_POST",
    payload: [
      {
        postTitle: "Test comment"
      }
    ]

    // {
    //   postTitle: "postTitle test",
    //   postCategory: "postCat test",
    //   postcomment: "postcomment test"
    // }
  };
}
