import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";


function App() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/").then(
      res => res.json()
        .then(res => setStory(res)
        )
    )
  }, [])

  const data = (story) => {
    return <div>
      <div>{story.stories.title}</div>
    </div>
  }

  return (
    <div className="App">

      {story.map((item, i) => (
          <div>{item.title}</div>
      ))}
      {console.log(story)}
    </div>
  );
}

export default App;
