import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'

import { defectAllAgain } from '../../redux/reducers/options'

import { Helmet } from 'react-helmet'

import photo_1 from '../../assets/img/photo1.png'
import photo_2 from '../../assets/img/photo1_1.png'
import photo_3 from '../../assets/img/photo2.png'
import photo_4 from '../../assets/img/photo2_1.png'
import photo_5 from '../../assets/img/photo3.png'
import photo_6 from '../../assets/img/photo3_1.png'
import photo_7 from '../../assets/img/photo4.png'
import photo_8 from '../../assets/img/photo4_1.png'
import photo_9 from '../../assets/img/photo5.png'
import photo_10 from '../../assets/img/photo5_1.png'

import './Examination.scss'

const ExaminationAgain = () => {
  const dispatch = useDispatch()
  const [scan, setScan] = useState(0)
  const [rec, setRec] = useState(0)
  const [defAgain, setDefAgain] = useState(0)
  const navigate = useNavigate()

  const recognize = Math.floor(rec)

  let isPaused = false
  let photo1 = false
  let photo2 = false
  let photo3 = false
  let photo4 = false
  let photo5 = false

  if (scan === 18) {
    isPaused = true
    photo1 = true
  }
  if (scan === 36) {
    isPaused = true
    photo2 = true
  }
  if (scan === 52) {
    isPaused = true
    photo3 = true
  }
  if (scan === 70) {
    isPaused = true
    photo4 = true
  }
  if (scan === 88) {
    isPaused = true
    photo5 = true
  }

  const yes = () => {
    isPaused = false
  }

  const close = () => {
    setDefAgain(defAgain + 1)
  }

  dispatch(defectAllAgain(defAgain))

  const no = () => {
    isPaused = false
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setScan(scan + 1)
        setRec(rec + 0.95)
      }
    }, 1000)
    if (scan === 100) {
      return navigate('/scan_results')
    }

    return () => clearInterval(timer)
  })

  return (
    <div className="examination">
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
              Количество брака <span style={{ color: '#000' }}>{defAgain}</span>
            </p>
          </div>
        </div>
      </div>
      {photo1 && (
        <div className="conf">
          <h2 className="exam__heading">Обнаружен дефект</h2>
          <div className="conf__images">
            <img src={photo_1} alt="Фото" />
            <img src={photo_2} alt="Схема" />
          </div>
          <h4 style={{ fontSize: 14, marginBottom: 20 }}>
            Подтвердите наличие дефекта
          </h4>
          <div className="conf__btn">
            <button className="conf__btnYes" onClick={yes} onMouseDown={close}>
              ДА
            </button>
            <button className="conf__btnNo" onClick={no}>
              НЕТ
            </button>
          </div>
        </div>
      )}
      {photo2 && (
        <div className="conf">
          <h2 className="exam__heading">Обнаружен дефект</h2>
          <div className="conf__images">
            <img src={photo_3} alt="Фото" />
            <img src={photo_4} alt="Схема" />
          </div>
          <h4 style={{ fontSize: 14, marginBottom: 20 }}>
            Подтвердите наличие дефекта
          </h4>
          <div className="conf__btn">
            <button className="conf__btnYes" onClick={yes} onMouseDown={close}>
              ДА
            </button>
            <button className="conf__btnNo" onClick={no}>
              НЕТ
            </button>
          </div>
        </div>
      )}
      {photo3 && (
        <div className="conf">
          <h2 className="exam__heading">Обнаружен дефект</h2>
          <div className="conf__images">
            <img src={photo_5} alt="Фото" />
            <img src={photo_6} alt="Схема" />
          </div>
          <h4 style={{ fontSize: 14, marginBottom: 20 }}>
            Подтвердите наличие дефекта
          </h4>
          <div className="conf__btn">
            <button className="conf__btnYes" onClick={yes} onMouseDown={close}>
              ДА
            </button>
            <button className="conf__btnNo" onClick={no}>
              НЕТ
            </button>
          </div>
        </div>
      )}
      {photo4 && (
        <div className="conf">
          <h2 className="exam__heading">Обнаружен дефект</h2>
          <div className="conf__images">
            <img src={photo_7} alt="Фото" />
            <img src={photo_8} alt="Схема" />
          </div>
          <h4 style={{ fontSize: 14, marginBottom: 20 }}>
            Подтвердите наличие дефекта
          </h4>
          <div className="conf__btn">
            <button className="conf__btnYes" onClick={yes} onMouseDown={close}>
              ДА
            </button>
            <button className="conf__btnNo" onClick={no}>
              НЕТ
            </button>
          </div>
        </div>
      )}
      {photo5 && (
        <div className="conf">
          <h2 className="exam__heading">Обнаружен дефект</h2>
          <div className="conf__images">
            <img src={photo_9} alt="Фото" />
            <img src={photo_10} alt="Схема" />
          </div>
          <h4 style={{ fontSize: 14, marginBottom: 20 }}>
            Подтвердите наличие дефекта
          </h4>
          <div className="conf__btn">
            <button className="conf__btnYes" onClick={yes} onMouseDown={close}>
              ДА
            </button>
            <button className="conf__btnNo" onClick={no}>
              НЕТ
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExaminationAgain
