import React from 'react'
import styles from './DesignProcess.module.scss'
const Card = ({process}) => {
  return (
    <div className={styles.card}>
        <img src={`/assets/images/processes/${process.icon}`} alt={`${process.card_heading}`}/>
        <p className={styles.heading}>{process.card_heading}</p>
        <p>{process.card_description}</p>
    </div>
  )
}

export default Card