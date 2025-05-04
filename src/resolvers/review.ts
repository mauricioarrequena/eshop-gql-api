// src/resolvers/review.ts
import { Review } from "../entities/Review";
import { AppDataSource } from "../data-source";

export const reviewResolvers = {
  Query: {
    getReviews: async () => {
      return await AppDataSource.getRepository(Review).find();
    },
  },
  Mutation: {
    createReview: async (_: any, args: { stars: number; comment: string }) => {
      const reviewRepo = AppDataSource.getRepository(Review);
      const review = reviewRepo.create(args);
      return await reviewRepo.save(review);
    },
  },
};
