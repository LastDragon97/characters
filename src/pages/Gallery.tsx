import Item from '../components/ItemComponent';
import { Box, Stack, Grid, Typography } from '@mui/material';
import CardComponent from '../components/CardComponent';
import PageHandler from '../components/PageHandler';
import FilterComponent from '../components/FilterComponent';
import { useCharacters } from 'hostRemote/useCharacters';
import type { Character } from '../Types/Types';

const Gallery = () => {
  const {
    info,
    characters,
    loading,
    page,
    message,
    updateFilter,
    updatePage,
    loadCharacterExtraInfo
  } = useCharacters();
  return (
    <Box>
      <FilterComponent updateFilter={updateFilter} />
      {characters.length > 0 ? (
        <Stack
          spacing={5}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: '30px',
          }}
        >
          <Item>
            <PageHandler
              pages={info.pages}
              page={page}
              updatePage={updatePage}
            />
          </Item>
          {loading ? (
            <p>Cargando dimensiones...</p>
          ) : (
            <Grid container spacing={3}>
              {characters.map((character: Character) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={character.id}>
                  <CardComponent
                    character={character}
                    characterExtraInfo={loadCharacterExtraInfo}
                  />
                </Grid>
              ))}
            </Grid>
          )}
          <Item>
            <PageHandler
              pages={info.pages}
              page={page}
              updatePage={updatePage}
            />
          </Item>
        </Stack>
      ) : (
        <Typography>{message}</Typography>
      )}
    </Box>
  );
};

export default Gallery;
