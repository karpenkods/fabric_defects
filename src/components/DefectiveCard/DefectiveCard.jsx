import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { TableResult } from '../Table/TableResults'
import { TableDefective } from '../Table/TableDefective'
import clear from '../../assets/img/clear.svg'
import './DefectiveCard.scss'

const DefectiveCard = () => {
  return (
    <div className="card">
      <Helmet>
        <title>{'Дефекты ткани | Дефективная карта'}</title>
      </Helmet>
      <div className="card__linkBlock">
        <Link className="card__linkBack" to={'/scan_results'}>
          <img src={clear} alt="Закрыть" />
        </Link>
      </div>
      <div className="card__table">
        <TableResult />
      </div>
      <TableDefective />
        <p className="card__print" onClick={() => window.print()}>Отправить на печать</p>
    </div>
  )
}

export default DefectiveCard
