import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import Slider from '@mui/material/Slider'
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
  return (
    <div className="options">
      <Helmet>
        <title>{'Дефекты ткани | Параметры ткани'}</title>
      </Helmet>
      <Link className="options__linkBack" to={'/fabric_defects'}>
        <img src={clear} alt='Закрыть' />
      </Link>
      <h1 className="options__heading">Введите параметры ткани</h1>
      <Box component="form" className="options__box">
        <Input
          placeholder="ID"
          disableUnderline={true}
          type="number"
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
          defaultValue={50}
          step={1}
          marks={marks}
          valueLabelDisplay="on"
          disableSwap
          sx={{
            '& .MuiSlider-thumb': {
              width: '10%',
              height: '100%',
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
          <button type="submit" className="options__buttonExam">
            НАЧАТЬ ПРОВЕРКУ
          </button>
        </Link>
      </Box>
    </div>
  )
}

export default FabricOptions
