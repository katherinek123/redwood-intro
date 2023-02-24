import { Contract, getDefaultProvider, providers, utils } from 'ethers'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

function getProvider(chain) {
  const provider =
    chain === 'ETH'
      ? getDefaultProvider()
      : new providers.JsonRpcProvider(
        'https://www.ethercluster.com/etc',
        'classic'
      )
  return provider
}

const contractAbiFragment = [
  {
    name: 'balanceOf',
    type: 'function',
    inputs: [
      {
        name: '_owner',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: 'balance',
        type: 'uint256',
      },
    ],
    constant: true,
    payable: false,
  },
]

const provider = getProvider('ETH')
const contract = new Contract(token, contractAbiFragment, provider)

// export const userBalances: QueryResolvers['userBalances'] = () => {
//   return db.userBalance.findMany()
// }

// export const userBalance: QueryResolvers['userBalance'] = ({ id }) => {
//   return db.userBalance.findUnique({
//     where: { id },
//   })
// }

// export const createUserBalance: MutationResolvers['createUserBalance'] = ({
//   input,
// }) => {
//   return db.userBalance.create({
//     data: input,
//   })
// }

// export const updateUserBalance: MutationResolvers['updateUserBalance'] = ({
//   id,
//   input,
// }) => {
//   return db.userBalance.update({
//     data: input,
//     where: { id },
//   })
// }

// export const deleteUserBalance: MutationResolvers['deleteUserBalance'] = ({
//   id,
// }) => {
//   return db.userBalance.delete({
//     where: { id },
//   })
// }
