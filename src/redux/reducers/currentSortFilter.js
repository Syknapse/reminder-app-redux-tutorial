import { SET_SORT_FILTER } from '../types/index'

const currentSortFilter = (state = 'NEWEST', action) => {
  switch (action.type) {
    case SET_SORT_FILTER:
      return action.filter
    default:
      return state
  }
}

export default currentSortFilter
