import { SET_SORT_FILTER } from '../types/index'
import save from '../../utils/save'

const currentSortFilter = (state, action) => {
  state = JSON.parse(localStorage.getItem('filters')) || {}
  state.currentSortFilter = state.currentSortFilter || 'NEWEST'

  switch (action.type) {
    case SET_SORT_FILTER:
      const filters = {
        ...state,
        currentSortFilter: action.filter,
      }
      save({ filters })
      return action.filter
    default:
      return state.currentSortFilter
  }
}

export default currentSortFilter
