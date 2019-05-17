import React, {useState, useEffect} from 'react';
import './Home.css';
import client from './client';
import ArticlesList from './components/ArticlesList';

const Home = () => {

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllPosts = async () => {
      let result = await client.fetch(
          `*[_type == "post"]`
        );
        setPosts(result);
        setLoading(false);
    };
    getAllPosts();
  }, []);

  return (
    <section className="home">
      <section className="title-bar">
        <h1 className="title">Sometimes I code and think and sometimes i just code</h1>
        <h3 className="sub-title">Fran Whitehead</h3>
        <p className="sub-sub-title">Javascript and Web developer </p>
      </section>
      {loading && <h1>Loading</h1>}
      {!loading && <ArticlesList posts={posts}/>}      
    </section>
  )
};

export default Home;