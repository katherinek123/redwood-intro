export const schema = gql`
  type userBalance {
    id: Int!
    name: String!
    amount: Int!
  }

  type Query {
    userBalances: [userBalance!]! @requireAuth
    userBalance(id: Int!): userBalance @requireAuth
  }
  input CreateUserBalance {
    id: Int!
    name: String!
    amount: Int!
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
  }
`
