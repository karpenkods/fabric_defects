import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './NotFound.scss'

const NotFound = () => {
  return (
    <div className="not">
      <Helmet>
        <title>{'Дефекты ткани | Страница не найдена'}</title>
      </Helmet>
      <h1 className="not__heading">Страница не найдена</h1>
      <Link className="not__link" to={'/fabric_defects'}>
        Вернуться на главную
      </Link>
    </div>
  )
}

export default NotFound
