import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import clear from '../../assets/img/clear.svg'
import './Examination.scss'

const a = Math.ceil(Math.random() * 100)
const b = a - Math.ceil(Math.random() * 2)
const c = Math.ceil(Math.random() * 9)

const Examination = () => {
  return (
    <div className="exam">
      <Helmet>
        <title>{'Дефекты ткани | Прокрутка рулона и запись'}</title>
      </Helmet>
      <Link className="exam__linkBack" to={'/'}>
      <img src={clear} alt='Закрыть' />
      </Link>
      <Link className="exam__linkForward" to={'/scan_results'}>
        Далее
      </Link>
      <h1 className="exam__heading">ПРОЦЕСС</h1>
      <div className="exam__block">
        <div className="exam__textUp">
          <p>
            Прокрученных метров: <br />
            <span style={{ color: '#000' }}>{a}</span>
          </p>
          <p>
            Распознанных метров: <br />
            <span style={{ color: '#000' }}>{b}</span>
          </p>
        </div>
        <div className="exam__textDown">
          <p>
            Количество брака <span style={{ color: '#000' }}>{c}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Examination
