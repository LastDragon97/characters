import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from '@mui/material';
import Details from './ModalComponent';
import type { Character } from '../Types/Types';
import { cardmediastyle } from './style';

interface Props {
  character: Character;
  characterExtraInfo: (url: string) => Promise<any>;
}

const CardComponent: React.FC<Props> = ({ character, characterExtraInfo }) => {
  const { image, name, species, status, gender } = character;
  return (
    <Card>
      <CardMedia sx={cardmediastyle} component="img" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p style={{ fontSize: '0.9em', color: '#666' }}>
            {species} - {status}
          </p>
          <a style={{ fontSize: '0.8em' }}>Género: {gender}</a>
        </Typography>
      </CardContent>
      <CardActions sx={{ alignContent: 'center', justifyContent: 'center' }}>
        <Details
          character={character}
          characterExtraInfo={characterExtraInfo}
        />
      </CardActions>
    </Card>
  );
};

export default CardComponent;
