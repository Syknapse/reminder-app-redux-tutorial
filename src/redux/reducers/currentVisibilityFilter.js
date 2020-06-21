import { SET_VISIBILITY_FILTER } from '../types/index'

const currentVisibilityFilter = (state = 'ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default currentVisibilityFilter
