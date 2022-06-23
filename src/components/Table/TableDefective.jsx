import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { defective } from '../../api/getDefective'
import './TableDefective.scss'

export const TableDefective = () => {
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
            <TableCell align="left">Фото</TableCell>
            <TableCell align="left">Схема</TableCell>
            <TableCell align="left">Класс</TableCell>
            <TableCell align="left">Размер дефекта, м</TableCell>
            <TableCell align="left">Координаты размещения, м</TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          className="firefox"
          sx={{
            '& .MuiTableCell-root': {
              padding: '15px 0 10px 24px',
              color: 'rgba(0, 0, 0, 0.54)',
              verticalAlign: 'top',
            },
            '& .MuiTableRow-root': {
              border: '1px solid rgba(0, 0, 0, 0.15)',
            },
          }}
        >
          {defective.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">
                <img alt="Фото ткани" src={row.photo} />
              </TableCell>
              <TableCell align="left">
                <img alt="Фото ткани" src={row.scheme} />
              </TableCell>
              <TableCell align="left">{row.class}</TableCell>
              <TableCell align="left">{row.size}</TableCell>
              <TableCell align="left">
                {row.coordinatesH}
                <br />
                {row.coordinatesW}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
