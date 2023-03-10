import {
  CartContainer
} from './JobList.styled'
import {
  LabelBox
} from '../Common.styled'
import CartItem from './CartItem'
import { useAppContext } from '../../libs/context-lib'

export default function CartList () {
  const { state } = useAppContext()
  const arrCarts = Object.values(state.favorites).filter((item) => item)

  return (
    <CartContainer>
      {(arrCarts.length > 0)
        ? (
        <>
          {arrCarts.map((row) => (
            <CartItem key={row.job.id} item={row} />
          ))}
        </>
          )
        : <LabelBox large light>No favorites yet.</LabelBox>}
    </CartContainer>
  )
}
