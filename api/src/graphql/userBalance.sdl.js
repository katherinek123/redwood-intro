export const schema = gql`
  type userBalance {
    id: Int!
    name: String!
    amount: Int!
  }

  type Query {
    userBalance(id: Int!): userBalance @requireAuth
  }
`
