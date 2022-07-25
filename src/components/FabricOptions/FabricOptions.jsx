import { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import Slider from '@mui/material/Slider'

import {
  inputId,
  inputName,
  inputSensitivity,
} from '../../redux/reducers/options'

import clear from '../../assets/img/clear.svg'

import './FabricOptions.scss'

const marks = [
  {
    value: 0,
    label: '0min',
  },
  {
    value: 100,
    label: '100max',
  },
]

const FabricOptions = () => {
  const dispatch = useDispatch()
  const [id, setId] = useState(null)
  const [name, setName] = useState('')
  const [sensitivity, setSensitivity] = useState(50)

  const handleChange = () => {
    dispatch(inputId(id))
    dispatch(inputName(name))
    dispatch(inputSensitivity(sensitivity))
  }

  return (
    <div className="options">
      <Helmet>
        <title>{'Дефекты ткани | Параметры ткани'}</title>
      </Helmet>
      <Link className="options__linkBack" to={'/'}>
        <img src={clear} alt="Закрыть" />
      </Link>
      <h1 className="options__heading">Введите параметры ткани</h1>
      <Box component="form" className="options__box">
        <Input
          placeholder="ID"
          disableUnderline={true}
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={{
            width: '100%',
            height: 36,
            padding: '0 10px',
            marginBottom: 20,
            backgroundColor: 'rgba(51, 51, 51, 0.1)',
            borderRadius: 4,
          }}
        />
        <Input
          placeholder="Название ткани"
          disableUnderline={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: '100%',
            height: 36,
            padding: '0 10px',
            marginBottom: 40,
            backgroundColor: 'rgba(51, 51, 51, 0.1)',
            borderRadius: 4,
          }}
        />
        <p className="options__text">Установите порог чувствительности</p>
        <Slider
          step={1}
          marks={marks}
          valueLabelDisplay="on"
          value={sensitivity}
          onChange={(e) => setSensitivity(e.target.value)}
          disableSwap
          sx={{
            '& .MuiSlider-thumb': {
              width: '30px',
              height: '30px',
              color: '#5d5d5d',
            },
            '& .MuiSlider-valueLabelLabel': {
              color: '#fff',
              fontWeight: '400',
            },
            '& .MuiSlider-valueLabelOpen': {
              position: 'absolute',
              top: '100%',
              backgroundColor: 'transparent',
            },
            '& .MuiSlider-markLabel': {
              fontSize: 12,
              fontWeight: 700,
            },
          }}
        />
        <Link className="options__link" to={'/examination'}>
          {name !== '' && id !== null ? (
            <button
              type="submit"
              className="options__buttonExam"
              onClick={handleChange}
            >
              НАЧАТЬ ПРОВЕРКУ
            </button>
          ) : (
            <button
              disabled
              type="submit"
              className="options__buttonExam disabled"
              onClick={handleChange}
            >
              НАЧАТЬ ПРОВЕРКУ
            </button>
          )}
        </Link>
      </Box>
    </div>
  )
}

export default FabricOptions
