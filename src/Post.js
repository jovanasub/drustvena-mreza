import React from "react";
import "./Post.css";

function Post({ podaci }) {
  return (
    <div className="post">
      <div className="ime">{podaci.ime}</div>
      <div className="status">{podaci.status}</div>
      <img className="slika" src={podaci.slika} />
    </div>
  );
}

export default Post;
