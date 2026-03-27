import Item from './ItemComponent';
import { Stack, Divider } from '@mui/material';

interface Props {
  updateFilter: (name: string, value: string) => void;
}

const FilterComponent: React.FC<Props> = ({ updateFilter }) => {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      divider={<Divider orientation="vertical" flexItem />}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px',
      }}
    >
      <Item>
        <input
          name="name"
          placeholder="Buscar por nombre..."
          onChange={(e) => updateFilter(e.target.name, e.target.value)}
        />
      </Item>
      <Item>
        <select
          name="status"
          onChange={(e) => updateFilter(e.target.name, e.target.value)}
        >
          <option value="">Cualquier Estado</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </Item>
      <Item>
        <input
          name="species"
          placeholder="Especie (ej: Human)"
          onChange={(e) => updateFilter(e.target.name, e.target.value)}
        />
      </Item>
    </Stack>
  );
};

export default FilterComponent;
