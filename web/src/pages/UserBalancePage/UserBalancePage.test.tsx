import { render } from '@redwoodjs/testing/web'

import UserBalancePage from './UserBalancePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserBalancePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserBalancePage />)
    }).not.toThrow()
  })
})
