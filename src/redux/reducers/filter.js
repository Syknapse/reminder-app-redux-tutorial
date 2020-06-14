import { SET_FILTER } from '../types/index'

const filter = (state = 'newest', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state
  }
}

export default filter
