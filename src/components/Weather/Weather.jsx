import React from 'react'
import styles from './weather.module.css'
import ReactCountryFlag from "react-country-flag"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import TextTransition from "react-text-transition";
const Weather = ({name,main,sys,weather}) => {
  console.log(weather)
  return (
    <>
      {name && 
        <div className={styles.wrapper}>
          <div className={styles.item} >
            <img src={`./img/${weather[0]?.main}.svg`} className={styles.weatherIcon} alt=""/>
            <div className={styles.flexBlock}>
              <TextTransition text={sys?.country}/>
              <ReactCountryFlag countryCode={sys?.country} svg/>
            </div>
            <TextTransition className={styles.temp} text={`${main?.temp}°c`}/>
            <div className={styles.flexBlock}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <TextTransition className={styles.title} text={name}/>
            </div>

            <p>weather: <strong><TextTransition style={{display: 'inline'}} text={weather[0]?.main}/></strong></p>
            <p>description: <strong><TextTransition style={{display: 'inline'}} text={weather[0]?.description}/></strong></p>
            
          </div>
        </div>
      }
    </>
  )
}

export default Weather
