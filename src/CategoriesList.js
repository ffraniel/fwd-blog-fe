import React, {useState, useEffect} from 'react';
import './CategoriesList.css';
import { Link } from "react-router-dom";
import client from './client';

const CategoriesList = (props) => {
  const { theme } = props.match.params;

  const [themedList, setThemedList] = useState(null);
  const [loadingThemedList, setLoadingThemedList] = useState(true);

  
  useEffect(() => {
    const getPostsByCategory = async () => {
      let postsByTheme = await client.fetch(
          `*[_type == "post"]`
      );
      setThemedList(postsByTheme);
      setLoadingThemedList(false);
    };
    getPostsByCategory(theme);
  }, [theme]);;

  
  return (
    <section className="categories-list">
      <p>{theme}</p>
    </section>
  )
};

export default CategoriesList;