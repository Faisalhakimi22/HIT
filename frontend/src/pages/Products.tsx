import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { Container, TextField, Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import api from '../api/axios';

const columns: GridColDef[] = [
  { field: 'title', headerName: 'Title', flex: 1, valueGetter: (p) => p.row.title?.en || 'Untitled' },
  { field: 'category', headerName: 'Category', flex: 1 },
  {
    field: 'price',
    headerName: 'Price',
    flex: 1,
    valueGetter: (p) => `${p.row.price.amount} ${p.row.price.currency}`,
  },
];

export default function Products() {
  const [search, setSearch] = useState('');
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({ page: 0, pageSize: 10 });

  const { data, isLoading } = useQuery({
    queryKey: ['products', search, paginationModel],
    queryFn: async () => {
      const page = paginationModel.page + 1;
      const limit = paginationModel.pageSize;
      const { data } = await api.get('/bazaar/products', { params: { search, page, limit } });
      return data;
    },
    keepPreviousData: true,
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
      </Box>
      <DataGrid
        autoHeight
        rows={data?.items || []}
        rowCount={data?.total || 0}
        columns={columns}
        pagination
        pageSizeOptions={[10, 20, 50]}
        paginationMode="server"
        loading={isLoading}
        page={paginationModel.page}
        pageSize={paginationModel.pageSize}
        onPaginationModelChange={setPaginationModel}
        getRowId={(row) => row._id}
      />
    </Container>
  );
} 