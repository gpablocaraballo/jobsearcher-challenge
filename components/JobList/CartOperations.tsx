import { toast } from 'react-toastify'
import Image from 'next/image'
import {
  OperationContainer
} from './JobList.styled'
import { useAppContext } from '../../libs/context-lib'
import { APP_ACTIONS } from '../../libs/reducerAction-lib'
import { JobSchema } from '../../libs/models'
import { updateFavorites } from '../../libs/services'

interface ItemProp {
    item: JobSchema
}

export default function CartOperations ({ item }: ItemProp) {
  const { state, dispatch } = useAppContext()

  const onOperationIconClicked = () => {
    const favorite:any = state.favorites
    if (favorite[item.id]) {
      favorite[item.id] = null
      toast('Favorite deleted')
    } else {
      favorite[item.id] = {
        job: item
      }
      toast('Favorite added!')
    }
    dispatch({ type: APP_ACTIONS.UPDATE_JOB_FAVORITES, data: favorite })
    updateFavorites(favorite)
  }
  const getFavoritesStateIcon = () => {
    const favorite:any = state.favorites
    if (favorite[item.id]) {
      return '/assets/heart-solid.svg'
    }
    return '/assets/heart-empty.svg'
  }
  return (
    <OperationContainer className="OperationBlock">
      <Image style={{ cursor: 'pointer' }} src={getFavoritesStateIcon()} onClick={onOperationIconClicked} width={25} height={25} alt="Add/Remove favorites" title="Add/Remove favorites" />
    </OperationContainer>
  )
}
