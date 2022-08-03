import prisma from "../config/db.js";
import { users } from "@prisma/client";

export type CreateUserData = Omit<users, "id">;

export interface UserTokenInfo {
  email: string;
  id: number;
}

export async function findByEmail(email: string) {
  const user = await prisma.users.findUnique({
    where: { email },
  });
  return user;
}

export async function insert(userData: CreateUserData) {
  await prisma.users.create({
    data: userData,
  });
}
