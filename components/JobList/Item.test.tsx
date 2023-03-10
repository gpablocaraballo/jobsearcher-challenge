import Item from './Item'
import { render, fireEvent } from '@testing-library/react'
import item from '../../libs/mocks'

global.scrollTo = jest.fn()
const mockHandler = jest.fn()
// avoid problems with router.push in this component
jest.mock('next/router', () => ({
  useRouter () {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: mockHandler
    }
  }
}))

describe('Item', () => {
  it('shows detail name', () => {
    const component = render(<Item item={item} />)
    component.getByText(item.title)
  })
  it('shows title', () => {
    const component = render(<Item item={item} />)
    component.getByText(item.title)
  })
  it('shows image with it has one', () => {
    const component = render(<Item item={item} />)
    component.getByAltText(/Company Image/i)
  })
  it('shows unavailable image when fails the url', () => {
    item.image_url = ''
    const component = render(<Item item={item} />)
    component.getByAltText(/Image unavailable/i)
  })
  it('Button detail get clicked when triggers event', () => {
    const component = render(<Item item={item} />)
    const button = component.getByTestId('Item-button-go-detail')
    fireEvent.click(button)
    fireEvent.click(button) // just in case :)
    expect(mockHandler.mock.calls).toHaveLength(2) // i clickec twice
  })
})
