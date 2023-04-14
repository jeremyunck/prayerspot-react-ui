import { useState } from 'react'
import Axios from 'axios'
import './App.css'

function App() {
  const[user, setUser] = useState()
  const getPosts = () => {
    Axios.get("http://localhost:8080/mediaPost/all").then((response) => {
      console.log(response)
      setUser(response.data[0].id)
    })
  }
  return (
    <div className="App">
      <h2>PrayerSpot UI</h2>
      <button onClick={getPosts}>Get Posts</button>
      <div>
        {user}
      </div>
    </div>

  )
}

export default App
