import { useContext, createContext } from 'react'
import { ItemState, Action, appDefaultState } from '../libs/models'

type ContextProps = {
  state: ItemState
  dispatch: (param: Action) => void
}

// export const AppContext = createContext<Partial<ContextProps>>({})
export const AppContext = createContext<ContextProps>(
  {
    state: appDefaultState,
    dispatch: () => {}
  })

export function useAppContext () {
  return useContext(AppContext)
}
