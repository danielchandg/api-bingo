// components/Logout.tsx

"use client";

import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";

/** @see https://docs.amplify.aws/nextjs/build-a-backend/server-side-rendering/nextjs-app-router-server-components/#add-server-authentication-routes */
export default function Logout() {
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        await signOut();
        router.push("/login");
      }}
      className="px-2 bg-white text-black"
    >
      Sign out
    </button>
  );
}