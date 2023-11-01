import {
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Authorization } from "./_components/authentication";

export default async function Home() {
  return (
    <main className="">
      <Authorization />
    </main>
  );
}

