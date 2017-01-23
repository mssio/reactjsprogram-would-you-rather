import { Map } from 'immutable'

const initialState = Map({
  isAtuhed: false,
  isFetching: true,
  error: '',
  authedId: '',
})

export default function users (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
