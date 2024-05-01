import React from 'react'
import MediaCard from '../Card'
import styles from './index.module.scss'

const CardList = ({artists,setArtists}) => {
  return (
    <>
    <div className={styles.dflex}>
      <MediaCard artists={artists} setArtists={setArtists} /></div>
    </>
  )
}

export default CardList
