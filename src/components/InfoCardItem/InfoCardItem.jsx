import React from 'react'
import styles from './infocard.module.css'
const InfoCardItem = ({title,text,trySay}) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p className={styles.text}>{text}</p>
      <p><strong>Try saying:</strong></p>
      <p>{trySay}</p>
    </div>
  )
}

export default InfoCardItem
