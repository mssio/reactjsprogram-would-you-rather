import { Map } from 'immutable'
import { listenToDecision, fetchSingleDecision } from 'helpers/api'
import { addUser } from 'redux/modules/users'
import { addListener } from 'redux/modules/listeners'

const SETTING_DECISIONS_LISTENER = 'SETTING_DECISIONS_LISTENER'
const SETTING_DECISIONS_LISTENER_ERROR = 'SETTING_DECISIONS_LISTENER_ERROR'
const SETTING_DECISIONS_LISTENER_SUCCESS = 'SETTING_DECISIONS_LISTENER_SUCCESS'
const ADD_DECISION = 'ADD_DECISION'

function settingDecisionsListener () {
  return {
    type: SETTING_DECISIONS_LISTENER,
  }
}

function settingDecisionsListenerError (error) {
  console.warn('Setting decisions listener error', error)
  return {
    type: SETTING_DECISIONS_LISTENER_ERROR,
    error: 'Error Fetching Decisions',
  }
}

function settingDecisionsListenerSuccess (data) {
  return {
    type: SETTING_DECISIONS_LISTENER_SUCCESS,
    timestamp: Date.now(),
    data,
  }
}

function addDecision (decisionId, decision) {
  return {
    type: ADD_DECISION,
    decisionId,
    decision,
  }
}

export function setAndHandleDecisionsListener () {
  return function (dispatch, getState) {
    if (getState().listeners.decisions === true) {
      return
    }

    dispatch(addListener('decisions'))
    dispatch(settingDecisionsListener())

    listenToDecision((decisions) => {
      dispatch(settingDecisionsListenerSuccess(decisions))
      Object.keys(decisions).map((decisionId) => dispatch(addUser(decisions[decisionId].author)))
    }, (error) => dispatch(settingDecisionsListenerError(error)))
  }
}

export function fetchAndHandleSingleDecision (decisionId) {
  return function (dispatch) {
    fetchSingleDecision(decisionId)
      .then((decision) => dispatch(addDecision(decisionId, decision)))
      .catch((error) => console.warn('Error fetching decision', error))
  }
}

const initialState = Map({
  lastUpdated: 0,
  isFetching: false,
  error: '',
  decisions: {},
})

export default function decisions (state = initialState, action) {
  switch (action.type) {
    case SETTING_DECISIONS_LISTENER:
      return state.merge({
        isFetching: true,
      })
    case SETTING_DECISIONS_LISTENER_ERROR:
      return state.merge({
        isFetching: false,
        error: action.error,
      })
    case SETTING_DECISIONS_LISTENER_SUCCESS:
      return state.merge({
        lastUpdated: action.timestamp || state.lastUpdated,
        isFetching: false,
        error: '',
        decisions: state.get('decisions').merge(action.data),
      })
    case ADD_DECISION:
      return state.merge({
        isFetching: false,
        decisions: state.get('decisions').merge({
          [action.decisionId]: action.decision,
        }),
      })
    default:
      return initialState
  }
}
