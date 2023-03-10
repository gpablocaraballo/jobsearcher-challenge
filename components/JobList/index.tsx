import {
  Container,
  ProductContainer,
  ListContainer
} from './JobList.styled'
import {
  LabelBox
} from '../Common.styled'
import Item from './Item'
import { JobSchema } from '../../libs/models'

interface Props {
  list?: Array<JobSchema>
}

export default function JobList ({ list }: Props) {
  return (
    <Container>
      <ProductContainer>
        <ListContainer>
          {(list && list.length > 0)
            ? (
            <>
              {list.map((row) => (
                <Item key={row.id} item={row} />
              ))}
            </>
              )
            : (list && list.length === 0) && <LabelBox>No items found.</LabelBox>}
        </ListContainer>
      </ProductContainer>
    </Container>
  )
}
