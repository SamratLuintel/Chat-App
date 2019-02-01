import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import PostCard from "components/utils/PostCard/PostCard";
import { connect } from "react-redux";
import { fetchPost } from "store/actions/posts/posts";

class InfiniteNewsFeed extends Component {
  state = {
    //start index of the post
    skip: 0,
    //how many to fetch at a particular request
    limit: 1,
    fetching: false,
    scrollable: true
  };

  loadMorePost = async () => {
    if (!this.state.fetching) {
      this.setState({ fetching: true });
      console.log("Skip thing", this.state.skip);
      await this.props.fetchPost(this.state.skip, this.state.limit);
      this.setState(prevState => {
        return { skip: prevState.skip + prevState.limit, fetching: false };
      });
    }
  };

  renderPost = () => {
    if (this.props.posts.list.length === 0) return;

    return this.props.posts.list.map((post, index) => {
      return (
        <PostCard
          images={post.images}
          likes={post.likes}
          index={index}
          comments={post.comments}
          text={post.text}
          id={post._id}
          date={post.date}
          user={post.user}
        />
      );
    });
  };

  render() {
    return (
      <div className="InfiniteNewsFeed">
        {" "}
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMorePost}
          hasMore={this.props.posts.scrollable}
          loader={
            <div className="InfiniteNewsFeed__loading" key={0}>
              Loading ...
            </div>
          }
        >
          <div className="row">{this.renderPost()}</div>
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});
export default connect(
  mapStateToProps,
  { fetchPost }
)(InfiniteNewsFeed);
