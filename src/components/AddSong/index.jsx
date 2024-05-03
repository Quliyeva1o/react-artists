import { Box, Button, Modal, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { addSong, getOne } from '../../API/requests';
import { endpoints } from '../../API/constants';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddSong = ({ artist, setArtists, artists }) => {
    const [editArr, setEditArr] = useState([]);
    const [open, setOpen] = useState(false);
    const [newSong, setNewSong] = useState({
        title: '',
        coverSrc: '',
        releaseYear: '',
    });
    const [myId, setMyId] = useState(null);

    const handleClose = () => {
        setOpen(false);
        setNewSong({
            title: '',
            coverSrc: '',
            releaseYear: '',
        });
        setEditArr([]);
        setMyId(null)
    };


    const handleOpen = () => {
        console.log(artist);
        const artistId = artist.id;
        console.log(artistId);
        getOne(endpoints.artist, artistId).then((res) => {
            setEditArr(res.data);
            setMyId(artistId);
            console.log(editArr[0]?.songs);
        });
        setOpen(true)
    };


    const handleAddSong = (e) => {
        e.preventDefault()
        setNewSong({
            title: e.target.value,
            coverSrc: e.target.value,
            releaseYear: e.target.value,
        })
        console.log(editArr[0]?.songs);
      console.log(artist[0]);
        addSong(endpoints.artist, myId, {...artist[0].songs,newSong}).then((res) => {
            console.log(res);
        });
        handleClose()
    };


    return (
        <>
            <Button variant="contained" size="small" onClick={handleOpen}>
                Add Song
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={(e) => handleAddSong(e)}>
                        <TextField
                            label="title"
                            variant="outlined"
                            type="text"
                            value={newSong.title}
                            onChange={(e) => setNewSong({ ...newSong, title: e.target.value })}
                        />
                        <TextField
                            label="coverSrc"
                            variant="outlined"
                            type="text"
                            value={newSong.coverSrc}
                            onChange={(e) => setNewSong({ ...newSong, coverSrc: e.target.value })}
                        />
                        <TextField
                            label="releaseYear"
                            variant="outlined"
                            type="text"
                            value={newSong.releaseYear}
                            onChange={(e) => setNewSong({ ...newSong, releaseYear: e.target.value })}
                        />
                        <Button variant="contained" size="small" type='submit'>
                            Add Song
                        </Button></form>
                </Box>
            </Modal>
        </>
    );
};

export default AddSong;
