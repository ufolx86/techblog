import DataLoader from "dataloader";
import { User } from "../../entities";

export const createUserLoader = () =>
  new DataLoader<number, User>(async (userIds) => {
    const users = await User.findByIds(userIds as number[]);
    const userIdToUser: Record<number, User> = {};

    users.forEach((usr) => (userIdToUser[usr.id] = usr));

    return userIds.map((userId) => userIdToUser[userId]);
  });
