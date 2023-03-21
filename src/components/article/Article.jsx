import React from 'react';
import './article.css';

const Article = ({imgUrl,date,title}) => {
  return (
    <div className='first__blog-container_article'>
       <div className='first__blog-container_article-image'>
         <img src={imgUrl} alt='blog' />
       </div>
       <div className='first__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
          <p>Read Full Article</p>
        </div>
        
       </div>

    </div>
  )
}

export default Article