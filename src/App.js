import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      caption: "Lorem Ipsum ajks hekjlad eklöaskdle djaksdjlke",
      username: "Username",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/f/f1/Picture_This_Album_Cover.jpg",
    },
    {
      caption: "Lorem Ipsum ajks hekjlad eklöaskdle djaksdjlke",
      username: "Username",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/f/f1/Picture_This_Album_Cover.jpg",
    },
  ]);

  return (
    <div className="app">
      <Header />
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
