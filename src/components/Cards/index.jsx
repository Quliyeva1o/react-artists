import React, { useEffect, useState } from 'react';
import CardList from '../CardList';
import styles from './index.module.scss';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const Cards = () => {
    const [artists, setArtists] = useState([]);
    const [filteredArtists, setFilteredArtists] = useState([]);
    const [sortOption, setSortOption] = useState('all');

    const filterArtists = (searchitem) => {
        const filtered = artists.filter((artist) =>
            artist.name.toLowerCase().includes(searchitem.toLowerCase().trim())
        );
        setFilteredArtists(filtered);
    };

    const sortArtists = (option) => {
        let sortedArtists = [...artists];
        if (option === 'a-z') {
            sortedArtists.sort((a, b) => a.name.localeCompare(b.name));
        } else if (option === 'z-a') {
            sortedArtists.sort((a, b) => b.name.localeCompare(a.name));
        }
        setFilteredArtists(sortedArtists);
    };

    useEffect(() => {
        setFilteredArtists(artists);
    }, [artists]);

    const handleSearchChange = (e) => {
        filterArtists(e.target.value);
    };

    const handleSortChange = (e) => {
        const option = e.target.value;
        setSortOption(option);
        if (option !== 'all') {
            sortArtists(option);
        } else {
            setFilteredArtists(artists);
        }
    };

    return (
        <div className={styles.cardsdiv}>
<div className={styles.dflex}>

            <TextField
                label="Search by name"
                variant="outlined"
                type="text"
                onChange={handleSearchChange}
            />
            <FormControl fullWidth>
                <InputLabel id="sort-label">Sort </InputLabel>
                <Select
                    labelId="sort-label"
                    id="sort-select"
                    value={sortOption}
                    onChange={handleSortChange}
                >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="a-z">A-Z</MenuItem>
                    <MenuItem value="z-a">Z-A</MenuItem>
                </Select>
            </FormControl></div>
            <div className={styles.cards}>
                <CardList
                    artists={filteredArtists}
                    setArtists={setArtists}
                    filteredArtists={filteredArtists}
                    setFilteredArtists={setFilteredArtists}
                />
            </div>
        </div>
    );
};

export default Cards;
