import React from 'react';
import './ArticlesList.css';
import { Link } from "react-router-dom";

const ArticlesList = (props) => {
  const { posts } = props;
  return (
      <section className="articles-list">
        {posts.map(post => (
          <section key={post._id} className="article-container">
            <Link className="article-link" to={`/post/${post.slug.current}`}>{post.title}</Link>
          </section>
        ))
        }
      </section>
  )
};

export default ArticlesList;