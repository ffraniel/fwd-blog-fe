import React, { useState, useEffect} from 'react';
import './Post.css';
import client from './client';


const Post = (props) => {

  const [article, setArticle] = useState(null);
  const [articleLoading, setArticleLoading] = useState(true);

  useEffect(() => {
    const getArticle = async () => {
      let [result] = await client.fetch(
          `*[_type == "post" && slug.current == "${props.match.params.postSlug}"]`
        );
        console.log(result)
        setArticle(result);
        setArticleLoading(false);
    };
    getArticle();
  }, []);

  return (
    <section className="post">
      {articleLoading && <h1>Loading</h1>}
      {!articleLoading && 
        <article className="article">
          <h3>{article.title}</h3>    
        </article>}
    </section>
  )
};

export default Post;