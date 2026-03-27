import type { ChangeEvent } from 'react';
import { Stack, Pagination } from '@mui/material';

interface Props {
  pages: number;
  page: number;
  updatePage: (event: ChangeEvent<unknown, Element>, page: number) => void;
}

const PageHandler: React.FC<Props> = ({ pages, page, updatePage }) => {
  return (
    <Stack spacing={2} sx={{width: '100%'}}>
      <Pagination count={pages} page={page} onChange={updatePage}  showFirstButton showLastButton />
    </Stack>
  );
}

export default PageHandler;
