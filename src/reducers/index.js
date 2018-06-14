import { combineReducers } from "redux";
import PostReducer from "./reducer_post";
import ActivePostReducer from "./reducer_selectPost";
import AddPost from "./reducer_PostActions";
import ShowAdd from "./reducer_utility";

// import reducers from "../reducers";
// import { createStore } from "redux";

const rootReducer = combineReducers({
  posts: PostReducer,
  selectedPost: ActivePostReducer,
  addPost: AddPost,
  showAdd: ShowAdd
});

// const store = createStore(rootReducer);
// store.subscribe(() => this.forceUpdate());
// store.subscribe(() => {
//   console.log("reducer");
//   console.log(store.getState().selectedPost);
// });
export default rootReducer;
