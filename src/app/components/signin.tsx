"use client";

import { signIn } from "next-auth/react";
import googleicon from "@/public/google_g_icon.png";
import Image from "next/image";

export default function SignInWithGoogleButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-4 w-10/12 h-12 rounded-xl bg-white hover:bg-slate-200 text-black font-bold py-2 px-4"
    >
      <Image src={googleicon} alt="google icon" height={28} />
      Sign in with Google
    </button>
  );
}
