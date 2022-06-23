import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { TableResult } from '../Table/TableResults'
import del from '../../assets/img/delete.svg'
import play from '../../assets/img/play.svg'
import './Results.scss'

const a = Math.ceil(Math.random() * 100)
const b = Math.ceil(Math.random() * 100)
const c = Math.ceil(Math.random() * 9)
const d = Math.ceil(Math.random() * 9)

const ResultsAgain = () => {
  return (
    <div className="res">
      <Helmet>
        <title>{'Дефекты ткани | Результаты повторного сканирования'}</title>
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
      <div className="res__links">
        <div className="res__linkDel" id="1">
          <Link className="res__linkCardAgain" to={'/defective_card'}>
            Дефектная карта / {a} чувствительности / найдено{' '}
            <span className="res__number">{c}</span> дефектов
          </Link>
          <img
            onClick={() => {
              document.getElementById('1').classList.add('hidden')
              document.getElementById('3').classList.add('hidden')
            }}
            className="res__del"
            src={del}
            id="4"
            alt="Удалить"
          />
        </div>
        <div className="res__linkDel" id="2">
          <Link className="res__linkCardAgain" to={'/defective_card'}>
            Дефектная карта / {b} чувствительности / найдено{' '}
            <span className="res__number">{d}</span> дефектов
          </Link>
          <img
            onClick={() => {
              document.getElementById('2').classList.add('hidden')
              document.getElementById('4').classList.add('hidden')
            }}
            className="res__del"
            src={del}
            id="3"
            alt="Удалить"
          />
        </div>
      </div>
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

export default ResultsAgain
