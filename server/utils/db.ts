import { db } from "hub:db";
import type { User } from "#auth-utils";
import { users } from "../db/schema/users";

export async function getUserByEmail(email: string): Promise<User | null> {
  const account = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });

  return account ?? null;
}

export async function registerUserByEmail(email: string): Promise<User | null> {
  const existingAccount = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });

  // We should not arive at this state.
  if (existingAccount)
    throw new Error("Account creation flow reached with existing account!");

  const [newAccount] = await db
    .insert(schema.users)
    .values({ email: email })
    .returning();

  if (!newAccount) {
    throw new Error("Failed to create new account!");
  }

  return newAccount;
}
