import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>{'Дефекты ткани | Главная'}</title>
      </Helmet>
      <Link className="home__link" to={'/new_check'}>
        <button className="home__buttonNew">НОВАЯ ПРОВЕРКА</button>
      </Link>
      <Link to={'/check_register'}>
        <p className="home__linkChecks">Реестр проверок</p>
      </Link>
    </div>
  )
}

export default Home
