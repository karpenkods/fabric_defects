import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { TableRegister } from '../Table/TableRegister'
import clear from '../../assets/img/clear.svg'
import './CheckRegister.scss'

const CheckRegister = () => {
  return (
    <div className="check">
      <Helmet>
        <title>{'Дефекты ткани | Реестр проверок'}</title>
      </Helmet>
      <div className="check__linkBlock">
        <Link className="check__linkBack" to={'/fabric_defects'}>
        <img src={clear} alt='Закрыть' />
        </Link>
      </div>
      <h1 className="check__heading">Реестр проверок</h1>
      <TableRegister />
    </div>
  )
}

export default CheckRegister
