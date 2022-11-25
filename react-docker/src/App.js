import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  useEffect(() => {
    fetch("http://127.0.0.1:4000/")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
    console.log("---", blogs);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>react project</h1>
        {blogs.map((blog) => (
          <div key={blog.id}>{blog.title}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
