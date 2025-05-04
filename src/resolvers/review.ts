// src/resolvers/review.ts
import { Review } from "../entities/Review";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { Product } from "../entities/Product";

export const reviewResolvers = {
  Query: {
    getReviews: async () => {
      return await AppDataSource.getRepository(Review).find();
    },
  },
  Mutation: {
    createReview: async (
      _: any,
      args: {
        stars: number;
        comment: string;
        userId: number;
        productId: number;
      }
    ) => {
      const userRepository = AppDataSource.getRepository(User);
      const productRepository = AppDataSource.getRepository(Product);
      const reviewRepository = AppDataSource.getRepository(Review);

      const user = await userRepository.findOneBy({ id: args.userId });
      const product = await productRepository.findOneBy({ id: args.productId });

      if (!user || !product) {
        throw new Error("User or Product not found");
      }
      
      const review = reviewRepository.create({
        stars: args.stars,
        comment: args.comment,
        user,
        product,
      });

      return await reviewRepository.save(review);
    },
  },
};
