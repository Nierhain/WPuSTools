"use client";

import {
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export function Authorization() {
  const user = useUser();
  console.log(user);

  return (
    <div className="flex gap-2">
      <UserButton afterSignOutUrl="/" />
      <div>
        {!user.isSignedIn && (
          <SignInButton afterSignInUrl="/" afterSignUpUrl="/" />
        )}
        {user.isSignedIn && <SignOutButton />}
      </div>
    </div>
  );
}
