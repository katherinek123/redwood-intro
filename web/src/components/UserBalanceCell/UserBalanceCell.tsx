import { useState } from 'react'

import { Loader, Modal } from '@mantine/core'
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
  const [opened, setOpened] = useState(false)
  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => setOpened(!opened)}
        transition="fade"
        transitionDuration={600}
        closeButtonLabel="Close User Balance Error Notification"
      >
        Error: {error?.message}
      </Modal>
    </div>
  )
}

export const Success = ({
  userBalance,
}: CellSuccessProps<FindUserBalanceQuery, FindUserBalanceQueryVariables>) => {
  return (
    <div>
      name : {JSON.stringify(userBalance.name)}
      amount: {JSON.stringify(userBalance.amount)}
    </div>
  )
}
