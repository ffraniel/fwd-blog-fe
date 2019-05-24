import React, { useState, useEffect} from 'react';
import './Post.css';
import client from './client';
import readableDate from './utility/readableDate';
import imageURLBuilder from './utility/imageURLBuilder';

const Post = (props) => {

  const [article, setArticle] = useState(null);
  const [articleLoading, setArticleLoading] = useState(true);

  useEffect(() => {
    const getArticle = async () => {
      let [result] = await client.fetch(
          `*[_type == "post" && slug.current == "${props.match.params.postSlug}"]
          {
            _id,
            _createdAt,
            title,
            slug,
            body,
            author,
            categories
          } 
            `
        );
        const resultWithDate = readableDate(result);
        setArticle(resultWithDate);
        setArticleLoading(false);
    };
    getArticle();
  }, [props.match.params.postSlug]);

  return (
    <section className="post">
      {articleLoading && <h1>Loading</h1>}
      {!articleLoading && 
        <article className="article">
          <h3 className="article-title">{article.title}</h3> 
          <p className="article-date">{article.dateString || ''}</p>
          {article && article.body.map(block => {
            if (block._type === 'block') {
              let textBlock = block.children.map(child => child.text).join('');
              return (
                <p className="article-text-block" key={block._key}>{textBlock}</p>
              );
            };
            if (block._type === 'image') {
              let imageURL = imageURLBuilder(block.asset._ref, 300);
              return (
                <img className="article-text-image" src={imageURL} alt={article.title + ' related'} key={block._key} />
              );         
            };
            return (
              <></>
            )
          })}
        </article>}
    </section>
  )
};

export default Post;