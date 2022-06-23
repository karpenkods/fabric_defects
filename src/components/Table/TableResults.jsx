import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { results } from '../../api/getScanResults'
import './TableDefective.scss'

export const TableResult = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead
          sx={{
            '& .MuiTableCell-root': {
              padding: '0 0 0 24px',
              height: 36,
              background: '#ededed',
              color: 'rgba(0, 0, 0, 0.54)',
              fontWeight: 400,
            },
          }}
        >
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Наименование ткани</TableCell>
            <TableCell align="left">Артикул</TableCell>
            <TableCell align="left">Номер цвета/рисунка</TableCell>
            <TableCell align="left">Длина, м</TableCell>
            <TableCell align="left">Дата выпуска</TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          className="firefox"
          sx={{
            '& .MuiTableCell-root': {
              padding: '0 0 0 24px',
              height: 48,
              color: 'rgba(0, 0, 0, 0.54)',
            },
            '& .MuiTableRow-root': {
              border: '1px solid rgba(0, 0, 0, 0.15)',
            },
          }}
        >
          {results.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.article}</TableCell>
              <TableCell align="left">{row.number}</TableCell>
              <TableCell align="left">{row.length}</TableCell>
              <TableCell align="left">{row.date1}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
