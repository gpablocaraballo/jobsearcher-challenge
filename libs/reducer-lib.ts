import { useReducer } from 'react'
import { APP_ACTIONS } from './reducerAction-lib'
import { ItemState, Action, appDefaultState } from '../libs/models'

function appReducer (state: ItemState, action: Action): any {
  switch (action.type) {
    case APP_ACTIONS.RESET_JOBS:
      return { ...state, jobs: action.data, filtered_jobs: action.data }
    case APP_ACTIONS.SET_JOBS:
      return { ...state, filtered_jobs: action.data }
    case APP_ACTIONS.SET_JOB:
      return { ...state, job: action.data }
    case APP_ACTIONS.SET_CATEGORY:
      return { ...state, category: action.data }
    case APP_ACTIONS.UPDATE_JOB_FAVORITES:
      return { ...state, favorites: action.data }
    default:
      throw new Error()
  }
}

export function useAppReducer () {
  return useReducer(appReducer, appDefaultState)
}

export default { useAppReducer }
