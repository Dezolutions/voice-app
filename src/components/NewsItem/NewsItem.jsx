import React from 'react'
import styles from './item.module.css'
const NewsItem = ({title,description,urlToImage,number,author,publishedAt,url,activeArticle}) => {
  
  return (
    <div className={activeArticle=== number ?  styles.activeItem : styles.item} >
      <img className={styles.img} src={urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'} alt=""/>
      <div className={styles.flexBlock}>
        <p>{author}</p>
        <p>{new Date(publishedAt).toDateString()}</p>
      </div>
      <div className={styles.text} >
        <h2 className={styles.title} >{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.flexBlock}>
        <a href={url} className={styles.link} rel="noopener noreferrer" target="_blank">Learn more</a>
        <p className={styles.number} >{number + 1}</p>
      </div>
    </div>
  )
}

export default NewsItem
