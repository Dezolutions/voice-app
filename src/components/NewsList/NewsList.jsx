import React from 'react'
import NewsItem from '../NewsItem/NewsItem'
import styles from './newslist.module.css'

const NewsList = ({news,activeArticle}) => {
  console.log(news)
  return (
    <ul className={styles.newsBlock} >
        {news.map((item,i) => (
          <NewsItem activeArticle={activeArticle} key={item.publishedAt + i} number={i} {...item}/>
        ))}
    </ul>
  )
}

export default NewsList
