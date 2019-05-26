import React, {useState, useEffect} from 'react';
import './CategoriesList.css';
import { Link } from "react-router-dom";
import client from './client';

const CategoriesList = (props) => {
  const { theme } = props.match.params;

  const [themedList, setThemedList] = useState(null);
  const [loadingThemedList, setLoadingThemedList] = useState(true);
  const [noResult, setNoResult] = useState(false);

  
  useEffect(() => {
    const getPostsByCategory = async () => {
      let postsByTheme = await client.fetch(
        `*[_type == "category" && title == "${theme}"]{
          _id, title,
          "posts": *[_type == "post" && references(^._id)]{title, "slug": slug.current}  
        }`
      );
      if (postsByTheme.length === 0) {
        setNoResult(true);
      } else {
        console.log(postsByTheme)
        setThemedList(postsByTheme);
        setLoadingThemedList(false);
      }
    };
    getPostsByCategory(theme);
  }, [theme]);;

  if (noResult) {
    return (
      <section className="categories-list">
        <h3>No results found for '{theme}'.</h3>
      </section>
    )    
  }
  console.log(themedList)
  return (
    <section className="categories-list">
      {loadingThemedList && <h3>Loading</h3>}
      {!loadingThemedList && 
      <section className="search-results">
        <h3>{themedList[0].posts.length} results for '{theme}'.</h3>
        {themedList[0].posts.map(post => {
          let { title, slug } = post;
          return (
            <Link className="search-results-link" to={`/post/${slug}`}>{title}</Link>
          );
        })}
      </section>
      }
    </section>
  )
};

export default CategoriesList;