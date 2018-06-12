// import initialState from "./reducer_post";
const initialState = { posts: [] };

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
