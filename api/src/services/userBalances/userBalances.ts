import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const userBalances: QueryResolvers['userBalances'] = () => {
  return db.userBalance.findMany()
}

export const userBalance: QueryResolvers['userBalance'] = ({ id }) => {
  return db.userBalance.findUnique({
    where: { id },
  })
}

export const createUserBalance: MutationResolvers['createUserBalance'] = ({
  input,
}) => {
  return db.userBalance.create({
    data: input,
  })
}

export const updateUserBalance: MutationResolvers['updateUserBalance'] = ({
  id,
  input,
}) => {
  return db.userBalance.update({
    data: input,
    where: { id },
  })
}

export const deleteUserBalance: MutationResolvers['deleteUserBalance'] = ({
  id,
}) => {
  return db.userBalance.delete({
    where: { id },
  })
}
