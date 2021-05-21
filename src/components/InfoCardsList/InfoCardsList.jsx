import React from 'react'
import InfoCardItem from '../InfoCardItem/InfoCardItem';
import styles from './infolist.module.css';
const InfoCardsList = () => {
  const infocards = [
    {
      id: 1,
      title:'News by country',
      text: 'Ukraine, Russia, USA...',
      trySay: 'Give me the news from "the name of country"' 
    },
    {
      id: 2,
      title:'News by term',
      text: 'Bitcoin, Tesla, Apple, PlayStation 5...',
      trySay: 'Tell me something about "term"'
    },
    {
      id: 3,
      title:'Weather',
      text: 'Kiev, Moscow, London...',
      trySay: 'Give me weather in "the name of city"'
    
    }]
  return (
    
      <div className={styles.container}>
        <ul className={styles.infoblock}>
          {infocards.map((item) => (
            <InfoCardItem  {...item} key={item.id} />
          ))}
        </ul>
      </div>
    
  )
}

export default InfoCardsList
