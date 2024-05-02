import React from 'react'
import { delOne } from '../../API/requests'
import { endpoints } from '../../API/constants'
// import styles from './index.module.scss'

const DeleteArtist = ({ artist, setArtists, artists }) => {
    return (
        <>
            <button className={`btn btn-danger `} onClick={
                async () => {
                    await delOne(endpoints.artist, artist.id);
                    setArtists(artists.filter((x) => x.id !== artist.id))
                }
            }
            >del</button>
        </>
    )
}

export default DeleteArtist
