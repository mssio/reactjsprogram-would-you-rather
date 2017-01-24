import { Map } from 'immutable'
import { saveDecision } from 'helpers/api'

const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const UPDATE_DECISION_TEXT = 'UPDATE_DECISION_TEXT'

function openModal () {
  return {
    type: OPEN_MODAL,
  }
}

function closeModal () {
  return {
    type: CLOSE_MODAL,
  }
}

// decisionType should be in: (title, firstOption, secondOption)
function updateDecisionText (decisionType, decisionText) {
  return {
    type: UPDATE_DECISION_TEXT,
    decisionType,
    decisionText,
  }
}

export function saveAndCloseModal () {
  return function (dispatch) {
    saveDecision(decision)
      .then(() => dispatch(closeModal()))
      .catch((error) => console.warn('Error saving decision', error))
  }
}

const initialState = Map({
  titleText: '',
  firstOptionText: '',
  secondOptionText: '',
  isOpen: false,
})

export default function modal (state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return state.merge({
        isOpen: true,
      })
    case CLOSE_MODAL:
      return state.merge({
        isOpen: false,
      })
    case UPDATE_DECISION_TEXT:
      return state.merge({
        [action.decisionType]: action.decisionText,
      })
    default:
      return state
  }
}
