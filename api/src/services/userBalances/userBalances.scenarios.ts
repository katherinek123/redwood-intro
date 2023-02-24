import type { Prisma, UserBalance } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserBalanceCreateArgs>({
  userBalance: {
    one: { data: { name: 'String', amount: 7868958 } },
    two: { data: { name: 'String', amount: 2624314 } },
  },
})

export type StandardScenario = ScenarioData<UserBalance, 'userBalance'>
