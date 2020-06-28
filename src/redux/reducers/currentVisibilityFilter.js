import { SET_VISIBILITY_FILTER } from '../types/index'
import save from '../../utils/save'

const currentVisibilityFilter = (state, action) => {
  state = JSON.parse(localStorage.getItem('filters')) || {}
  state.currentVisibilityFilter = state.currentVisibilityFilter || 'ALL'

  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      const filters = {
        ...state,
        currentVisibilityFilter: action.filter,
      }
      save({ filters })
      return action.filter
    default:
      return state.currentVisibilityFilter
  }
}

export default currentVisibilityFilter
