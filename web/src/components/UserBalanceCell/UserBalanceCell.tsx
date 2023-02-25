import { Loader, Alert } from '@mantine/core'
import type { FindUserBalanceQuery, FindUserBalanceQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindUserBalanceQuery($id: Int!) {
    userBalance: userBalance(id: $id) {
      id
      name
      amount
    }
  }
`

export const Loading = () => (
  <div>
    <Loader size="xl" />
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindUserBalanceQueryVariables>) => {
  return (
    <div>
      <Alert
        title={error.message}
        color="indigo"
        withCloseButton={true}
        closeButtonLabel="Close Error Message"
      >
        User Balance Not Found. Please Contact Customer Support.
      </Alert>
    </div>
  )
}

export const Success = ({
  userBalance,
}: CellSuccessProps<FindUserBalanceQuery, FindUserBalanceQueryVariables>) => {
  return (
    <div>
      asset name : {userBalance.name}
      <br />
      amount: {JSON.stringify(userBalance.amount)}
    </div>
  )
}
