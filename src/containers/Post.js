import React from "react";
import { connect } from "react-redux";
import ViewPostList from "./ViewPostList";
import ViewPost from "./ViewPost";
import AddPost from "./AddPost";

class Post extends React.Component {
  render() {
    console.log("POSTS --------------->", this.props.posts);
    console.log("POSTS --------------->", this.props.posts.posts.length);
    const renderComponents =
      this.props.posts.posts.length === 0 ? (
        <div>
          <h4>Oops! no post found... you can add the post..</h4>
        </div>
      ) : (
        ""
      );

    if (!this.props.flag || this.props.flag.viewList) {
      return (
        <div>
          {renderComponents}
          <ViewPostList />
        </div>
        // { renderComponents }
      );
    } else {
      // console.log("else viewList --------->" + this.props.flag.viewList);
      return <ViewPost />;
    }
  }
}

function mapStateToProps(state) {
  return {
    flag: state.selectedPost,
    posts: state.addPost
  };
}

export default connect(mapStateToProps)(Post);
