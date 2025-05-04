import { gql } from "apollo-server-express";

export const reviewTypeDefs = gql`
  type Review {
    id: ID!
    stars: Int!
    comment: String!
  }

  type Query {
    getReviews: [Review!]!
  }

  type Mutation {
    createReview(stars: Int!, comment: String!): Review!
  }

`;
