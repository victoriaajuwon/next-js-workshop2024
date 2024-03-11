import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { fetchUserFromCookie } from "@/actions/userActions";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default async function Layout({ children }) {
  const user = await fetchUserFromCookie();
  console.log(user);
  return (
    <>
      <Header user={user} />
      {children}
    </>
  );
}
