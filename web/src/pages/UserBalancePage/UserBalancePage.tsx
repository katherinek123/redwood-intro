import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'

const CREATE_USER_BALANCE = gql`
  mutation CreateUserBalanceMutation($input: CreateUserBalance!) {
    createUserBalance()
  }
`

const UserBalancePage = () => {
  const [create] = useMutation(CREATE_USER_BALANCE)
  return (
    <>
      <MetaTags title="UserBalance" description="UserBalance page" />

      <h1>UserBalancePage</h1>
      <p>
        THIS IS THE USER BALANCE
        {() => create()}
      </p>
      <p>
        My default route is named <code>userBalance</code>, link to me with `
        <Link to={routes.userBalance()}>UserBalance</Link>`
      </p>
    </>
  )
}

export default UserBalancePage
