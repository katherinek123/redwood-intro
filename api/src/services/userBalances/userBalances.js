import { Contract, getDefaultProvider, providers, utils } from 'ethers'
//import type { MutationResolvers } from 'types/graphql'

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
//read only connection w eth blockchain
const provider = getProvider('ETH')
const token = 'DOGE'
const account = '0x826B095b14EEE1dd05C3fd2f656020f8b0420494'
//can be read from when connected with provider
const contract = new Contract(token, contractAbiFragment, provider)
const symbol = await contract.symbol()
const balance = await contract.balanceOf(account)

//all incoming units of USD are in cents

// export const userBalances: QueryResolvers['userBalances'] = () => {
//   return db.userBalance.findMany()
// }

// export const userBalance: QueryResolvers['userBalance'] = ({ id }) => {
//   return db.userBalance.findUnique({
//     where: { id },
//   })
// }

export const createUserBalance = (symbol, balance) => {
  return db.userBalance.create({
    data: {
      name: symbol,
      amount: balance,
    },
  })
}

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
