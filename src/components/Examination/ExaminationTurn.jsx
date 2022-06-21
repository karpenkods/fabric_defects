import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import clear from '../../assets/img/clear.svg'
import './Examination.scss'

const a = Math.ceil(Math.random() * 100)

const ExaminationTurn = () => {
  return (
    <div className="exam">
      <Helmet>
        <title>{'Дефекты ткани | Распознование в очереди'}</title>
      </Helmet>
      <Link className="exam__linkBack" to={'/fabric_defects'}>
        <img src={clear} alt="Закрыть" />
      </Link>
      <Link className="exam__linkForward" to={'/scan_results'}>
        Далее
      </Link>
      <h1 className="exam__heading">ПРОЦЕСС</h1>
      <div className="exam__block">
        <div className="exam__textUp">
          <p style={{ color: 'rgba(0, 0, 0, 0.54)', fontWeight: 700 }}>
            Прокрученных метров: <br />
            <span style={{ color: '#000', fontWeight: 700 }}>{a}</span>
          </p>
          <p style={{ color: 'rgba(0, 0, 0, 0.54)', fontWeight: 700 }}>
            Распознанных метров: <br />
            <span style={{ color: '#000', fontWeight: 700 }}>
              в очереди <br /> на распознование
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ExaminationTurn
