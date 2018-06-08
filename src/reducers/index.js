import { combineReducers } from "redux";
import PostReducer from "./reducer_post";
import ActivePostReducer from "./reducer_selectPost";
import BackToList from "./reducer_backToList";
import AddPost from "./reducer_addPost";

// import reducers from "../reducers";
// import { createStore } from "redux";

const rootReducer = combineReducers({
  posts: PostReducer,
  selectedPost: ActivePostReducer,
  backToList: BackToList,
  addPost: AddPost
});

// const store = createStore(rootReducer);
// store.subscribe(() => this.forceUpdate());
// store.subscribe(() => {
//   console.log("reducer");
//   console.log(store.getState().selectedPost);
// });
export default rootReducer;
