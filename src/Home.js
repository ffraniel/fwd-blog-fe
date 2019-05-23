import React, {useState, useEffect} from 'react';
import './Home.css';
import client from './client';
import readableDate from './utility/readableDate';
import ArticlesList from './components/ArticlesList';
import Categories from './components/Categories';

const Home = () => {

  const [posts, setPosts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [catLoading, setCatLoading] = useState(true);

  useEffect(() => {
    const getAllPosts = async () => {
      let result = await client.fetch(
          `*[_type == "post"]`
      );
      const resultWithDate = result.map(readableDate);
      setPosts(resultWithDate);
      setLoading(false);
    };
    const getAllCategories = async () => {
      let categoriesResults = await client.fetch(
        '*[_type == "category"]'
      );
      setCategories(categoriesResults);
      setCatLoading(false);
    };
    getAllPosts();
    getAllCategories();
  }, []);

  return (
    <section className="home">
      <section className="title-bar">
        <h3 className="sub-title">Fran Whitehead</h3>
        <p className="sub-sub-title">Javascript and Web developer </p>
        <p className="tag-line">I'm just a boy standing in front of the internet, asking it to love me.</p>
      </section>
      {catLoading && <p>Loading Categories</p>}
      {!catLoading && <Categories categories={categories} />}
      {loading && <h1>Loading</h1>}
      {!loading && <ArticlesList posts={posts}/>}      
    </section>
  )
};

export default Home;