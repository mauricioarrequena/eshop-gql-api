import { User } from "../entities/User";
import { AppDataSource } from "../data-source";

export const userResolvers = {
  Query: {
    getUsers: async () => {
      return await AppDataSource.getRepository(User).find();
    },
  },
  Mutation: {
    createUser: async (_: any, args: { name: string; email: string }) => {
      const userRepo = AppDataSource.getRepository(User);
      const user = userRepo.create(args);
      return await userRepo.save(user);
    },
  },
};
