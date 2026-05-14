import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { demoUsers } from "@/lib/data";
import { User } from "@/lib/types";

const SESSION_KEY = "vka_demo_user";

export async function getCurrentUser(): Promise<User | null> {
  const store = await cookies();
  const userId = store.get(SESSION_KEY)?.value;
  return demoUsers.find((user) => user.id === userId) ?? null;
}

export async function requireUser(): Promise<User> {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/");
  }
  return user;
}

export { SESSION_KEY };
