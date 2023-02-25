import { Form, Submit, FieldError, Label, TextField, FormError } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'

import UserBalanceCell from 'src/components/UserBalanceCell/UserBalanceCell'
const CREATE_USER_BALANCE = gql`
  mutation CreateUserBalanceMutation($input: CreateUserBalance!) {
    createUserBalance(input: $input) {
      id
    }
  }
`

const UserBalancePage = () => {
  const [create, {loading, error}] = useMutation(CREATE_USER_BALANCE)
  const onSubmit = (data) => {
    console.log(data)
    create({
      variables: {
        input: data,
      },
    })
  }
  return (
    <>
      <MetaTags title="UserBalance" description="UserBalance page" />

      <h1>UserBalancePage</h1>
      <p>THIS IS THE USER BALANCE</p>
      <UserBalanceCell id={1} />
      <Form onSubmit={onSubmit}>
        <FormError error={error} />
        <Label name="name" errorClassName="error">
          Token Name
        </Label>
        <TextField name="name" validation={{ required: true }} />
        <FieldError name="name" className="error"></FieldError>
        <Submit disabled={loading}>Find My Balance</Submit>
      </Form>
      <p>
        My default route is named <code>userBalance</code>, link to me with `
        <Link to={routes.userBalance()}>UserBalance</Link>`
      </p>
    </>
  )
}

export default UserBalancePage
