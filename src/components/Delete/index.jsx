import React from 'react'
import { delOne } from '../../API/requests'
import { endpoints } from '../../API/constants'
import { Button } from '@mui/material'

const DeleteArtist = ({ artist, setArtists, artists }) => {
    return (
        <>
            <Button variant="contained" color="error"  onClick={
                async () => {
                    await delOne(endpoints.artist, artist.id);
                    setArtists(artists.filter((x) => x.id !== artist.id))
                }
            }
            >del</Button>
        </>
    )
}

export default DeleteArtist
