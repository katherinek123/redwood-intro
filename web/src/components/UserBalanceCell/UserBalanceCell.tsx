import type { FindUserBalanceQuery, FindUserBalanceQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindUserBalanceQuery($id: Int!) {
    userBalance: userBalance(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

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
