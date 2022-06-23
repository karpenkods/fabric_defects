import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { TableResult } from '../Table/TableResults'
import play from '../../assets/img/play.svg'
import './Results.scss'

const a = Math.ceil(Math.random() * 100)
const c = Math.ceil(Math.random() * 9)

const Results = () => {
  return (
    <div className="res">
      <Helmet>
        <title>{'Дефекты ткани | Результаты сканирования'}</title>
      </Helmet>
      <div className="res__linkBlock">
        <Link className="res__linkBack" to={'/check_register'}>
          Ресстр проверок
        </Link>
      </div>
      <div className="res__buttonBlock">
        <h1 className="res__heading">Результаты сканирования</h1>
        <Link to={'/new_check_again'}>
          <button className="res__buttonAgain">ПРОВЕРИТЬ СНОВА</button>
        </Link>
      </div>
      <TableResult />
      <Link className="res__linkCard" to={'/defective_card'}>
        Дефектная карта / {a} чувствительности / найдено{' '}
        <span className="res__number">{c}</span> дефектов
      </Link>
      <div className="res__videoBlock">
        <div className="res__img">
          <img className="res__play" src={play} alt="Видео" />
        </div>
        <p>
          Видеозапись <br />
          сканирования
        </p>
      </div>
    </div>
  )
}

export default Results
