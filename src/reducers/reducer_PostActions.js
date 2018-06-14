// import initialState from "./reducer_post";
const initialState = {
  posts: [
    {
      postTitle: "My day at the beach",
      postCategory: "Beach, Fun",
      postComment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tortor sapien. Sed imperdiet velit non rutrum pretium. Morbi vestibulum massa nisi, nec tempor quam facilisis accumsan. Cras euismod laoreet lacus. In fermentum cursus sapien ac accumsan. Aenean accumsan tellus sit amet augue scelerisque lobortis. Cras bibendum justo erat. Vivamus ac egestas mauris, quis gravida magna. Phasellus elementum arcu quis euismod viverra. Vivamus risus urna, tristique quis metus in, feugiat rutrum nunc. Nulla efficitur imperdiet libero, finibus viverra mauris accumsan quis. Mauris ante ex, faucibus sit amet massa a, ultricies interdum sem. In in tortor eget sapien semper facilisis. Integer porttitor fermentum est, a eleifend urna aliquam quis."
    },
    {
      postTitle: "Fun with new Puppy",
      postCategory: "Fun, Puppy",
      postComment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tortor sapien. Sed imperdiet velit non rutrum pretium. Morbi vestibulum massa nisi, nec tempor quam facilisis accumsan. Cras euismod laoreet lacus. In fermentum cursus sapien ac accumsan. Aenean accumsan tellus sit amet augue scelerisque lobortis. Cras bibendum justo erat. Vivamus ac egestas mauris, quis gravida magna. Phasellus elementum arcu quis euismod viverra. Vivamus risus urna, tristique quis metus in, feugiat rutrum nunc. Nulla efficitur imperdiet libero, finibus viverra mauris accumsan quis. Mauris ante ex, faucibus sit amet massa a, ultricies interdum sem. In in tortor eget sapien semper facilisis. Integer porttitor fermentum est, a eleifend urna aliquam quis."
    },

    {
      postTitle: "Another day at work",
      postCategory: "Job",
      postComment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tortor sapien. Sed imperdiet velit non rutrum pretium. Morbi vestibulum massa nisi, nec tempor quam facilisis accumsan. Cras euismod laoreet lacus. In fermentum cursus sapien ac accumsan. Aenean accumsan tellus sit amet augue scelerisque lobortis. Cras bibendum justo erat. Vivamus ac egestas mauris, quis gravida magna. Phasellus elementum arcu quis euismod viverra. Vivamus risus urna, tristique quis metus in, feugiat rutrum nunc. Nulla efficitur imperdiet libero, finibus viverra mauris accumsan quis. Mauris ante ex, faucibus sit amet massa a, ultricies interdum sem. In in tortor eget sapien semper facilisis. Integer porttitor fermentum est, a eleifend urna aliquam quis."
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_POST":
      return { posts: state.posts.concat(action.payload) };
    case "DELETE_POST":
      return {
        posts: state.posts.filter(post => post.postTitle !== action.payload)
      };
  }
  return state;
}

// console.log("Reducer InitialState ---", initialState);
// console.log("Reducer ADD_POST action.payload", action.payload);
// // console.log("Reducer ADD_POST ---", state);
// console.log("Reducer ADD_POST state.post---", state.posts);
// let test = state.post;
// console.log("Test ---", test);
// let test1 = [{ p1: "p1", p2: "p2" }];
// console.log("Test1 ---", test1);
// test = test.concat(test1);
// console.log("concat result", test);
// console.log("Test array", test);
// console.log(
//   "Test  state.post.concat(action.payload) ---",
//   state.post.concat(action.payload)
// );
// console.log();
// if (state.posts !== undefined) {
//   console.log("Reducer ADD_POST", JSON.stringify(state.posts));
//   console.log("Reducer ADD_POST ---", state.posts);
//   return { posts: state.post.concat(action.payload) };
// } else {
//   return { posts: action.payload };
// }
// console.log(
//   "Test  state.post.concat(action.payload) ---",
//   state.post.concat(action.payload)
// );

// return { posts: action.payload };
