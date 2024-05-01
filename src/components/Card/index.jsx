import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getAll } from '../../API/requests';
import { endpoints } from '../../API/constants';
import { useEffect } from 'react';
import DeleteArtist from '../Delete';

export default function MediaCard({ artists, setArtists }) {
  const getArtists = () => {
    getAll(endpoints.artist)
      .then((res) => {
        setArtists(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getArtists();
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
      {artists.map((artist, idx) => (
        <Card sx={{ maxWidth: 345 }} key={idx}>
          <CardMedia sx={{ height: 240 }} image={artist.imgSrc} title={artist.name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              name: {artist.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              genre: {artist.genre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              info: {artist.songs.length}
            </Typography>
          </CardContent>
          <CardActions>
           <DeleteArtist artist={artist} artists={artists} setArtists={setArtists}/>
            <Button size="small">Add Song</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
