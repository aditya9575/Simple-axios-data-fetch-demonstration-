import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      //  .then((res)=>console.log(res.data) );    // it is for simply checking/logging in the data being fetched to the console
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="app">
      Hello World
      {data.map((post) => {
        const { id, title, body } = post;
        return (
          <div className="card" key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
