import React from "react";
import Post from "./containers/Post";
import reducers from "./reducers";
import { createStore } from "redux";
const store = createStore(reducers);
// import ViewPostList from "./containers/ViewPostList";
// import ViewPost from "./containers/ViewPost";

export default class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
    console.log("App did mount");
  }
  render() {
    return (
      <div className="container">
        <br />
        <Post />
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className="container">
//       <br />
//       {/* <ViewPostList />
//       <ViewPost /> */}
//       <Post />
//     </div>
//   );
// };

// export default App;
