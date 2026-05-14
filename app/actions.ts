"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { demoUsers } from "@/lib/data";
import { SESSION_KEY } from "@/lib/session";

export async function loginAction(formData: FormData) {
  const userId = String(formData.get("userId") || "");
  const user = demoUsers.find((entry) => entry.id === userId);

  if (!user) {
    redirect("/?error=unknown-user");
  }

  const store = await cookies();
  store.set(SESSION_KEY, user.id, {
    httpOnly: true,
    sameSite: "lax",
    path: "/"
  });

  redirect("/dashboard");
}

export async function logoutAction() {
  const store = await cookies();
  store.delete(SESSION_KEY);
  redirect("/");
}
