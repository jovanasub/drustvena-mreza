import React from "react";
import Post from "./Post";
import postovi from "./postovi";
import "./HomeStrana.css"

function HomeStrana() {
  return (
    <div className="homeStrana">
      {postovi.map((post) => {
        return <Post podaci={post} />;
      })}
    </div>
  );
}

export default HomeStrana;
