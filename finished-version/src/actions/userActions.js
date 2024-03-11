"use server";
import { client } from "./globals";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const fetchUserFromCookie = async () => {
  const userId = cookies().get("userId")?.value;

  if (!userId) {
    return null;
  }

  const sql = "SELECT * FROM users WHERE id = ?";
  const args = [userId];

  const result = await client.execute({ sql, args });

  return result.rows[0];
};

export const authenticateUser = async (formData) => {
  //
  const email = formData.get("email");
  const sql = "SELECT * FROM users WHERE email = ?";
  const args = [email];

  const result = await client.execute({ sql, args });
  const user = result.rows[0];
  console.log(result);

  if (!user) {
    return redirect("/");
  }

  cookies().set("userId", user.id);
  return redirect("/albums");
};
