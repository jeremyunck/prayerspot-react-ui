import { useState, useEffect } from "react";
import Axios from "axios";
import Popup from "./components/Popup";
import UserPostForm from "./components/UserPostForm";
import UserPostsListed from "./components/UserPostsListed";

import "./App.css";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [userPosts, setUserPosts] = useState([]);

  return (
    <div className="App">
      <main>
        <h2>PrayerSpot</h2>
        <button onClick={() => setButtonPopup(true)}>New Post</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <UserPostForm></UserPostForm>
        </Popup>
        <UserPostsListed
          userPosts={userPosts}
          setUserPosts={setUserPosts}
        ></UserPostsListed>
      </main>
    </div>
  );
}

export default App;
