import gql from "graphql-tag";
export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    title: String!
    body: String!
  }

  input UpdatePostInput {
    title: String
    body: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvcG9zdHMuc2RsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgUG9zdCB7XG4gICAgaWQ6IEludCFcbiAgICB0aXRsZTogU3RyaW5nIVxuICAgIGJvZHk6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IERhdGVUaW1lIVxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgcG9zdHM6IFtQb3N0IV0hIEByZXF1aXJlQXV0aFxuICAgIHBvc3QoaWQ6IEludCEpOiBQb3N0IEByZXF1aXJlQXV0aFxuICB9XG5cbiAgaW5wdXQgQ3JlYXRlUG9zdElucHV0IHtcbiAgICB0aXRsZTogU3RyaW5nIVxuICAgIGJvZHk6IFN0cmluZyFcbiAgfVxuXG4gIGlucHV0IFVwZGF0ZVBvc3RJbnB1dCB7XG4gICAgdGl0bGU6IFN0cmluZ1xuICAgIGJvZHk6IFN0cmluZ1xuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgY3JlYXRlUG9zdChpbnB1dDogQ3JlYXRlUG9zdElucHV0ISk6IFBvc3QhIEByZXF1aXJlQXV0aFxuICAgIHVwZGF0ZVBvc3QoaWQ6IEludCEsIGlucHV0OiBVcGRhdGVQb3N0SW5wdXQhKTogUG9zdCEgQHJlcXVpcmVBdXRoXG4gICAgZGVsZXRlUG9zdChpZDogSW50ISk6IFBvc3QhIEByZXF1aXJlQXV0aFxuICB9XG5gXG4iXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIn0=