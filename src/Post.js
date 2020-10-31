import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" src="/static/images/avatar/1.jpg" />
        <h3>Username</h3>
      </div>

      <img
        className="post__img"
        src="https://upload.wikimedia.org/wikipedia/en/f/f1/Picture_This_Album_Cover.jpg"
        alt=""
      />
      <h4 className="post__text">
        <strong>Username </strong>
        caption
      </h4>
    </div>
  );
}

export default Post;
