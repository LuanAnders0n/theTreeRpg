import React from 'react'
import { Container } from './styles'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'character', headerName: 'Nome do personagem', width: 130 },
  { field: 'race', headerName: 'raça', width: 130 },
  {
    field: 'class',
    headerName: 'Classe',
    type: 'text',
    width: 90
  }
]

const rows = [
  { id: 1, race: 'Anão', character: 'Yopi', class: 'Paladino' },
  { id: 2, race: 'Elfo da floresta', character: 'Wirtt', class: 'Mago' },
  { id: 3, race: 'Drow', character: 'Leucis', class: 'Paladino' },
  { id: 4, race: 'Alto elfo', character: 'Alexander', class: 'Feiticeiro' }
]

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}
