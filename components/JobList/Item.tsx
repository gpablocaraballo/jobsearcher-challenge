import { useState } from 'react'
import { useRouter } from 'next/router'
import get from 'lodash.get'
import {
  ListItem,
  ImgUnvavailable,
  ItemName,
  ItemFooter,
  ItemLocation
} from './JobList.styled'
import {
  ButtonBox
} from '../Common.styled'
import { useAppContext } from '../../libs/context-lib'
import { APP_ACTIONS } from '../../libs/reducerAction-lib'
import { JobSchema } from '../../libs/models'
import JobOperations from './JobOperations'

interface ItemProp {
    item: JobSchema
}

export default function Item ({ item }: ItemProp) {
  const { dispatch } = useAppContext()
  const router = useRouter()
  const [imageFailed, setImageFailed] = useState(false)

  const onItemClicked = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    dispatch({ type: APP_ACTIONS.SET_JOB, data: item })
    const path = `/jobs/${item.id}`
    router.push(path, undefined, { shallow: true })
  }

  return (
    <ListItem>
      {item.image_url && !imageFailed
        ? (
            <img alt="Company Image" width={200} height={200} src={get(item, 'image_url', '')} onError={() => setImageFailed(true)} />
          )
        : (
            <ImgUnvavailable alt="Image unavailable" width={200} height={200} src="/assets/no-image.png" />
          )}
      <ItemName>{item.title}</ItemName>
      <ItemLocation>Location: {item.location_type}</ItemLocation>
      <ItemFooter>
        <ButtonBox data-testid="Item-button-go-detail" onClick={onItemClicked}>Show Detail</ButtonBox>
      </ItemFooter>
      <JobOperations item={item} />
    </ListItem>
  )
}
