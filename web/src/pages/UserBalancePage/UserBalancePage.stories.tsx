import type { ComponentMeta } from '@storybook/react'

import UserBalancePage from './UserBalancePage'

export const generated = () => {
  return <UserBalancePage />
}

export default {
  title: 'Pages/UserBalancePage',
  component: UserBalancePage,
} as ComponentMeta<typeof UserBalancePage>
