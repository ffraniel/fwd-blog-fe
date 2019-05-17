import React, {useState, useEffect} from 'react';
import './Home.css';
import client from './client';

const Home = () => {

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
    <section className="home">
      <h1 className="title">Sometimes I code and think and sometimes i just code</h1>
      <h3 className="sub-title">Fran Whitehead</h3>
      <p className="sub-sub-title">Javascript and Web developer </p>
      
    </section>
  )
};

export default Home;