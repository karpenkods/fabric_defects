const INPUT_ID = 'INPUT_ID'
const INPUT_NAME = 'INPUT_NAME'
const INPUT_SENS = 'INPUT_SENS'
const INPUT_SENS_AGAIN = 'INPUT_SENS_AGAIN'
const DEFECT_ALL = 'DEFECT_ALL'
const DEFECT_ALL_AGAIN = 'DEFECT_ALL_AGAIN'

const initialState = {
  clothId: null,
  clothName: '',
  clothSensitivity: 50,
  clothSensitivityAgain: 50,
  defect: 0,
  defectAgain: 0,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_ID: {
      return {
        ...state,
        clothId: action.clothId,
      }
    }
    case INPUT_NAME: {
      return {
        ...state,
        clothName: action.clothName,
      }
    }
    case INPUT_SENS: {
      return {
        ...state,
        clothSensitivity: action.clothSensitivity,
      }
    }

    case INPUT_SENS_AGAIN: {
      return {
        ...state,
        clothSensitivityAgain: action.clothSensitivityAgain,
      }
    }

    case DEFECT_ALL: {
      return {
        ...state,
        defect: action.defect,
      }
    }

    case DEFECT_ALL_AGAIN: {
      return {
        ...state,
        defectAgain: action.defectAgain,
      }
    }

    default:
      return state
  }
}

export const inputId = (clothId) => {
  return (dispatch) => {
    return dispatch({ type: INPUT_ID, clothId })
  }
}

export const inputName = (clothName) => {
  return (dispatch) => {
    return dispatch({ type: INPUT_NAME, clothName })
  }
}

export const inputSensitivity = (clothSensitivity) => {
  return (dispatch) => {
    return dispatch({ type: INPUT_SENS, clothSensitivity })
  }
}

export const inputSensitivityAgain = (clothSensitivityAgain) => {
  return (dispatch) => {
    return dispatch({ type: INPUT_SENS_AGAIN, clothSensitivityAgain })
  }
}

export const defectAll = (defect) => {
  return (dispatch) => {
    return dispatch({ type: DEFECT_ALL, defect })
  }
}

export const defectAllAgain = (defectAgain) => {
  return (dispatch) => {
    return dispatch({ type: DEFECT_ALL_AGAIN, defectAgain })
  }
}

export default appReducer
