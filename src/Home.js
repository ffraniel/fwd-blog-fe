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
        <h3 className="sub-title">Fran Whitehead</h3>
        <p className="sub-sub-title">Javascript and Web developer </p>
        <p className="tag-line">I'm just a boy standing in front of the internet, asking it to love me.</p>
      </section>
      {loading && <h1>Loading</h1>}
      {!loading && <ArticlesList posts={posts}/>}      
    </section>
  )
};

export default Home;