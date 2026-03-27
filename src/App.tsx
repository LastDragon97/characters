import { Fragment } from 'react';
import Gallery from './pages/Gallery';
import { CssBaseline, Container } from '@mui/material';

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container>
        <Gallery />
      </Container>
    </Fragment>
  );
};

export default App;
