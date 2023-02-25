import gql from "graphql-tag";
export const schema = gql`
  type userBalance {
    id: Int!
    name: String!
    amount: Int!
  }

  type Query {
    userBalance(id: Int!): userBalance @requireAuth
  }
  input CreateUserBalance {
    name: String!
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvdXNlckJhbGFuY2Uuc2RsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgdXNlckJhbGFuY2Uge1xuICAgIGlkOiBJbnQhXG4gICAgbmFtZTogU3RyaW5nIVxuICAgIGFtb3VudDogSW50IVxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgdXNlckJhbGFuY2UoaWQ6IEludCEpOiB1c2VyQmFsYW5jZSBAcmVxdWlyZUF1dGhcbiAgfVxuICBpbnB1dCBDcmVhdGVVc2VyQmFsYW5jZSB7XG4gICAgbmFtZTogU3RyaW5nIVxuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgY3JlYXRlUG9zdChpbnB1dDogQ3JlYXRlUG9zdElucHV0ISk6IFBvc3QhIEByZXF1aXJlQXV0aFxuICB9XG5gXG4iXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==