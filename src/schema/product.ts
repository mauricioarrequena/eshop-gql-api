import { gql } from "apollo-server-express";

export const productTypeDefs = gql`

  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  type Query {
    getProducts: [Product!]!
  }

  type Mutation {
    createProduct(name: String!, price: Float!): Product!
  }
`;

