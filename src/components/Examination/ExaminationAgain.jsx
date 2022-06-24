import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './Examination.scss'

const ExaminationAgain = () => {
  const [scan, setScan] = useState(0)
  const [rec, setRec] = useState(0)
  const [def, setDef] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setScan(scan + 1)
      setRec(rec + 0.95)
      setDef(def + 0.05)
    }, 1000)
    if (scan === 100) {
      return navigate('/scan_results')
    }
    return () => clearInterval(timer)
  })

  const recognize = Math.floor(rec)
  const defective = Math.floor(def)

  return (
    <div className="exam">
      <Helmet>
        <title>{'Дефекты ткани | Проверка'}</title>
      </Helmet>
      <Link className="exam__linkForward" to={'/scan_results_again'}>
        Далее
      </Link>
      <h1 className="exam__heading" style={{ fontWeight: 400 }}>
        ПРОВЕРЯЮ
      </h1>
      <div className="exam__block">
        <div className="exam__textUp">
          <p>
            Прокрученных метров: <br />
            <span style={{ color: '#000' }}>{scan}</span>
          </p>
          <p>
            Распознанных метров: <br />
            <span style={{ color: '#000' }}>{recognize}</span>
          </p>
        </div>
        <div className="exam__textDown">
          <p>
            Количество брака <span style={{ color: '#000' }}>{defective}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ExaminationAgain
