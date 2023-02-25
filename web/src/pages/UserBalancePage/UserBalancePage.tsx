import { Form, Submit, FieldError, Label, TextField, TextAreaField,} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
const CREATE_USER_BALANCE = gql`
  mutation CreateUserBalanceMutation($input: CreateUserBalance!) {
    createUserBalance(input: $input) {
      name
    }
  }
`

const UserBalancePage = () => {
  const [create] = useMutation(CREATE_USER_BALANCE)
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="UserBalance" description="UserBalance page" />

      <h1>UserBalancePage</h1>
      <p>
        THIS IS THE USER BALANCE
      </p>
      <Form onSubmit={onSubmit}>
        <Label name="token" errorClassName="error">
          Token Name
        </Label>
        <TextField name='token' validation={{
          required: true
        }} />
        <FieldError name='token' className='error'></FieldError>
        <Submit>Find My Balance</Submit>
      </Form>
      <p>
        My default route is named <code>userBalance</code>, link to me with `
        <Link to={routes.userBalance()}>UserBalance</Link>`
      </p>
    </>
  )
}

export default UserBalancePage
