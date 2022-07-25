import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Checkbox from '@mui/material/Checkbox'

import SearchBar from 'material-ui-search-bar'

import { register } from '../../api/getRegisterOfChecks'

const originalRows = register

export const TableRegister = () => {
  const [searched, setSearched] = useState('')
  const [register, setRegister] = useState(originalRows)

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return (
        row.name.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.status.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.number.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.id.includes(searchedVal) ||
        row.length.includes(searchedVal) ||
        row.date1.includes(searchedVal) ||
        row.date2.includes(searchedVal) ||
        row.defective.includes(searchedVal)
      )
    })
    setRegister(filteredRows)
  }

  const cancelSearch = () => {
    setSearched('')
    requestSearch(searched)
  }

  const navigate = useNavigate()
  const navigateTo = () => navigate('/scan_results')

  return (
    <TableContainer
      sx={{
        '& .MuiPaper-root': {
          border: '1px solid rgba(0, 0, 0, 0.15)',
          borderRadius: 0,
        },
      }}
    >
      <SearchBar
        placeholder="Поиск"
        value={searched}
        onChange={(searchVal) => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
      />
      <Table>
        <TableHead
          sx={{
            '& .MuiTableCell-root': {
              padding: '0 18px 0 18px',
              height: 36,
              background: '#ededed',
              color: 'rgba(0, 0, 0, 0.54)',
              fontWeight: 400,
              border: '1px solid rgba(0, 0, 0, 0.15)',
            },
          }}
        >
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox inputProps={{ 'aria-label': 'select all desserts' }} />
            </TableCell>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Название ткани</TableCell>
            <TableCell align="left">№ цвет/рисунок</TableCell>
            <TableCell align="left">Длина, м</TableCell>
            <TableCell align="left">Дата выпуска</TableCell>
            <TableCell align="left">Дата проверки</TableCell>
            <TableCell align="left">Брак, шт</TableCell>
            <TableCell align="right">Статус</TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            '& .MuiTableCell-root': {
              padding: '0 18px 0 18px',
              height: 48,
              color: 'rgba(0, 0, 0, 0.54)',
            },
            '& .MuiTableRow-root': {
              border: '1px solid rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
            },
          }}
        >
          {register.map((row, index) => (
            <TableRow key={index} hover onClick={navigateTo}>
              <TableCell padding="checkbox">
                <Checkbox
                  inputProps={{ 'aria-label': 'select all desserts' }}
                />
              </TableCell>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.number}</TableCell>
              <TableCell align="left">{row.length}</TableCell>
              <TableCell align="left">{row.date1}</TableCell>
              <TableCell align="left">{row.date2}</TableCell>
              <TableCell align="left">{row.defective}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
