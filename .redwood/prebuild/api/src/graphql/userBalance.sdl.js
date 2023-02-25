import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvdXNlckJhbGFuY2Uuc2RsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgdXNlckJhbGFuY2Uge1xuICAgIGlkOiBJbnQhXG4gICAgbmFtZTogU3RyaW5nIVxuICAgIGFtb3VudDogSW50IVxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgdXNlckJhbGFuY2VzOiBbdXNlckJhbGFuY2UhXSEgQHJlcXVpcmVBdXRoXG4gICAgdXNlckJhbGFuY2UoaWQ6IEludCEpOiB1c2VyQmFsYW5jZSBAcmVxdWlyZUF1dGhcbiAgfVxuICBpbnB1dCBDcmVhdGVVc2VyQmFsYW5jZSB7XG4gICAgaWQ6IEludCFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgYW1vdW50OiBJbnQhXG4gIH1cblxuICB0eXBlIE11dGF0aW9uIHtcbiAgICBjcmVhdGVQb3N0KGlucHV0OiBDcmVhdGVQb3N0SW5wdXQhKTogUG9zdCEgQHJlcXVpcmVBdXRoXG4gIH1cbmBcbiJdLCJtYXBwaW5ncyI6Ik9BQXNCQSxHQUFHO0FBQXpCLE9BQU8sTUFBTUMsTUFBTSxHQUFHRCxHQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyJ9