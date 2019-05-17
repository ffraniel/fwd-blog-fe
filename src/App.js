import React, {useState, useEffect} from 'react';
import './App.css';
import client from './client';

function App() {
  
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  
  
  useEffect(() => {
    const getAllPosts = async () => {
      let result = await client.fetch(
          `*[_type == "post"]`
        );
        console.log(result)
        setPosts(result);
        setLoading(false);
    };
    getAllPosts();
  }, []);


  return (
    <div className="App">
      
      {loading && <h1>Loading</h1>}
      {!loading && posts.map(post => (
        <section className="post">
          <h1>{post.title}</h1>
        </section>
      ))}
    </div>
  );
}

export default App;
