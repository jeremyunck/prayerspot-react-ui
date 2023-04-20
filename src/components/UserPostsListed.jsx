import React, { useEffect } from "react";
import Axios from "axios";
import "./UserPostsListed.css";

function UserPostsListed(props) {
  const fetchUserPosts = () => {
    Axios.get("http://localhost:8080/api/v1/user-post/all").then((res) => {
      console.log(res);
      props.setUserPosts(res.data);
    });
  };

  useEffect(() => {
    fetchUserPosts();
  }, []);

  return props.userPosts.map((userPost, index) => {
    return (
      <div key={index}>
        {userPost.id ? (
          <img
            src={`http://localhost:8080/api/v1/user-post/${userPost.id}/image/download`}
          />
        ) : null}
        <br />
        <br />
        <p>{userPost.caption}</p>
        <br />
      </div>
    );
  });
}

export default UserPostsListed;
