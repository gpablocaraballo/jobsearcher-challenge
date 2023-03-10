import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ContainerHeader,
  ContainerNav,
  CartSide
} from './Header.styled'
import Modal from '../Modal'
import CartList from '../JobList/CartList'
import { useAppContext } from '../../libs/context-lib'
import { APP_ACTIONS } from '../../libs/reducerAction-lib'
import { getFavorites } from '../../libs/services'
import { FavoritesSchema } from '../../libs/models'
import { ButtonBox } from '../Common.styled'
import Filters from '../Filters'

export default function Header () {
  const { state, dispatch } = useAppContext()
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  useEffect(() => {
    if (state.favorites && Object.values(state.favorites).length === 0) {
      const cart:FavoritesSchema = getFavorites()
      dispatch({ type: APP_ACTIONS.UPDATE_JOB_FAVORITES, data: cart })
    }
  }, [])

  return (
      <ContainerHeader>
        <ContainerNav>
            <Link href="/">
              <a>
                <Image
                src="/assets/logo.svg"
                alt="PowertoFly"
                width={100}
                height={100}
                />
              </a>
            </Link>
            <Filters />
            <CartSide>
              <Image
                src="/assets/heart-solid.svg"
                alt="Show favorites"
                title="Show favorites"
                width={50}
                height={50}
                style={{ cursor: 'pointer' }}
                onClick={() => setModalVisible(true)}
              />
            </CartSide>
        </ContainerNav>
        {modalVisible && <Modal margin="4%" onBackgroundClick={() => setModalVisible(false) }>
          <ButtonBox onClick={() => setModalVisible(false) }>Close Favorites</ButtonBox>
          <CartList />
        </Modal>}

      </ContainerHeader>
  )
};
