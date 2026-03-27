import { modalboxstyle, cardmediastyle, liststyle } from './style';
import type { Character, ExpandMoreProps } from '../Types/Types';
import { styled } from '@mui/material/styles';
import {
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Modal,
  CardHeader,
  Avatar,
  IconButton,
  CardActions,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Grid,
} from '@mui/material';
import { red } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import useDetailsModal from '../hooks/useDetailsModal';

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

interface Props {
  character: Character;
  characterExtraInfo: (url: string) => Promise<any>;
}

const Details: React.FC<Props> = ({ character, characterExtraInfo }) => {
  const {
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
  } = character;

  const {
    open,
    characterEpisodeInfo,
    expanded,
    handleOpen,
    handleClose,
    handleExpandClick,
  } = useDetailsModal(characterExtraInfo, episode);

  return (
    <div>
      <Button onClick={handleOpen}>Detalles</Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={modalboxstyle}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <img src={image} alt={name.charAt(0)} />
              </Avatar>
            }
            action={
              <IconButton color="error" size="large" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            }
            title={name}
            subheader={`${species} - ${status}`}
            sx={{ border: '2px solid #000' }}
          />
          <CardContent>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 2, md: 8 }}
            >
              <Grid size={{ xs: 2, sm: 2, md: 4 }}>
                <CardMedia
                  component="img"
                  sx={cardmediastyle}
                  image={image}
                  alt={name}
                />
              </Grid>
              <Grid size={{ xs: 2, sm: 2, md: 4 }}>
                <Typography variant="body1">
                  Informacion general:
                  <br />
                  {type}
                  <br />
                  Genero: {gender}
                  <br />
                  Origen: {origin.name}
                  <br />
                  Ubicacion: {location.name}
                  <br />
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions disableSpacing sx={{ border: '2px solid #000' }}>
            <Typography variant="body1">Episodios donde aparece:</Typography>
            <IconButton aria-label="info">
              <InfoIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <List sx={liststyle}>
                {characterEpisodeInfo.length > 0 &&
                  characterEpisodeInfo.map((episode) => (
                    <ListItem disablePadding key={episode.name}>
                      <ListItemText
                        primary={`Episodio ${episode.id}: ${episode.name} Al aire desde: ${episode.air_date}`}
                      />
                    </ListItem>
                  ))}
              </List>
            </CardContent>
          </Collapse>
        </Card>
      </Modal>
    </div>
  );
};

export default Details;
