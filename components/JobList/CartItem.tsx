import { useState } from 'react'
import get from 'lodash.get'
import {
  CartListItem,
  CartListBody,
  ImgUnvavailable,
  ItemName,
  CartLabels,
  JobOperationsContainer
} from './JobList.styled'
import { FavoriteSchema } from '../../libs/models'
import JobOperations from './JobOperations'

interface ItemProp {
    item: FavoriteSchema
}

export default function CartItem ({ item }: ItemProp) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <CartListItem>
      <CartListBody>
        {item.job.image_url && !imageFailed
          ? (
              <img width={50} height={50} src={get(item.job, 'image_url', '')} onError={() => setImageFailed(true)} />
            )
          : (
              <ImgUnvavailable width={50} height={50} src="/assets/no-image.png" alt="unavailable" />
            )}
        <CartLabels>
          <ItemName style={{ height: '20px' }}>{item.job.title && item.job.title.substring(0, 45)}...</ItemName>
        </CartLabels>
      </CartListBody>
      <JobOperationsContainer>
        <JobOperations item={item.job} />
      </JobOperationsContainer>
    </CartListItem>
  )
}
