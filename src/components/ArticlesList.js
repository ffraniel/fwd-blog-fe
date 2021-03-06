import React from 'react';
import './ArticlesList.css';
import { Link } from "react-router-dom";

const ArticlesList = (props) => {
  const { posts } = props;
  // const getPostLengths = (num) => {
  //   if (num % 2 === 1) {
  //     return num - 1;
  //   } else {
  //     return num;
  //   }
  // };
  // const postLengths = getPostLengths(posts.length);
  // posts.length = postLengths;
  return (
      <section className="articles-list">
        {posts.map(post => (
          <section key={post._id} className="articles-list-container">
            <Link className="list-article-link" to={`/post/${post.slug.current}`}>{post.title}</Link>
            <p className="list-article-date">{post.dateString}</p>
          </section>
        ))
        }
      </section>
  )
};

export default ArticlesList;