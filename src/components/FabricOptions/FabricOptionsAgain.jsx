import { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

import { inputSensitivityAgain } from '../../redux/reducers/options'

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

const FabricOptionsAgain = () => {
  const dispatch = useDispatch()
  const [sensitivityAgain, setSensitivityAgain] = useState(50)

  const handleChange = () => {
    dispatch(inputSensitivityAgain(sensitivityAgain))
  }
  return (
    <div className="options__again">
      <Helmet>
        <title>{'Дефекты ткани | Проверить снова'}</title>
      </Helmet>
      <Box component="form" className="options__box">
        <p className="options__text">Установите порог чувствительности</p>
        <Slider
          defaultValue={50}
          step={1}
          marks={marks}
          value={sensitivityAgain}
          onChange={(e) => setSensitivityAgain(e.target.value)}
          valueLabelDisplay="on"
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
        <Link className="options__link" to={'/examination_again'}>
          <button
            type="submit"
            className="options__buttonExam"
            onClick={handleChange}
          >
            НАЧАТЬ ПРОВЕРКУ
          </button>
        </Link>
      </Box>
    </div>
  )
}

export default FabricOptionsAgain
