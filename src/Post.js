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
  }, [props.match.params.postSlug]);

  function toPlainText(blocks = []) {
    //  tweak this
    return blocks
      // loop through each block
      .map(block => {
        // if it's not a text block with children, 
        // return nothing
        if (block._type !== 'block' || !block.children) {
          return ''
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map(child => child.text).join('')
      })
      // join the parapgraphs leaving split by two linebreaks
      .join('\n\n')
  };

  return (
    <section className="post">
      {articleLoading && <h1>Loading</h1>}
      {!articleLoading && 
        <article className="article">
          <h3>{article.title}</h3>  
          {toPlainText(article.body)}  
        </article>}
    </section>
  )
};

export default Post;