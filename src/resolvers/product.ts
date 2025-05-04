import { Product } from "../entities/Product";
import { AppDataSource } from "../data-source";

export const productResolvers = {
  Query: {
    getProducts: async () => {
      return await AppDataSource.getRepository(Product).find();
    },
  },

  Mutation: {
    createProduct: async (_: any, args: { name: string; price: number }) => {
      const productRepository = AppDataSource.getRepository(Product);
      const product = productRepository.create(args);
      return await productRepository.save(product);
    },
  },

};
