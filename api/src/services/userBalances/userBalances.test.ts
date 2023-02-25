import type { UserBalance } from '@prisma/client'

import {
  userBalances,
  userBalance,
  createUserBalance,
  updateUserBalance,
  deleteUserBalance,
} from './userBalances'
import type { StandardScenario } from './userBalances.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userBalances', () => {
  scenario('returns all userBalances', async (scenario: StandardScenario) => {
    const result = await userBalances()

    expect(result.length).toEqual(Object.keys(scenario.userBalance).length)
  })

  scenario(
    'returns a single userBalance',
    async (scenario: StandardScenario) => {
      const result = await userBalance({ id: scenario.userBalance.one.id })

      expect(result).toEqual(scenario.userBalance.one)
    }
  )

  scenario('creates a userBalance', async () => {
    const result = await createUserBalance({
      input: { name: 'String', amount: 3326899 },
    })

    expect(result.name).toEqual('String')
    expect(result.amount).toEqual(3326899)
  })

  scenario('updates a userBalance', async (scenario: StandardScenario) => {
    const original = (await userBalance({
      id: scenario.userBalance.one.id,
    })) as UserBalance
    const result = await updateUserBalance({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a userBalance', async (scenario: StandardScenario) => {
    const original = (await deleteUserBalance({
      id: scenario.userBalance.one.id,
    })) as UserBalance
    const result = await userBalance({ id: original.id })

    expect(result).toEqual(null)
  })
})
