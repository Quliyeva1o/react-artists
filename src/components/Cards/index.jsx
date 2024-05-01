import React, { useState } from 'react'
import CardList from '../CardList'
import styles from './index.module.scss'

const Cards = () => {
    const [artists, setArtists] = useState([]);
    const [filteredArtists, setFilteredArtists] = useState([]);

    
    return (
        <><div className={styles.cards}>
        <CardList artists={artists} setArtists={setArtists} filteredArtists={filteredArtists} setFilteredArtists={setFilteredArtists} /></div>
        </>
    )
}

export default Cards
