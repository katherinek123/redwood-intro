import type { FindUserBalanceQuery, FindUserBalanceQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import {Loader} from '@mantine/core'
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
}: CellFailureProps<FindUserBalanceQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  userBalance,
}: CellSuccessProps<FindUserBalanceQuery, FindUserBalanceQueryVariables>) => {
  return <div>{JSON.stringify(userBalance)}</div>
}
