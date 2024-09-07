import React from "react";
import MobileMenuComponent from "./MobileMenu";
import Link from "next/link";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";
import { CircleFadingPlus, CircleUserRound, House, Users } from "lucide-react";

export default function NavbarComponent() {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href={"/"} className="w-30 text-blue-600 font-bold text-2xl">
          TogoLinked
        </Link>
      </div>

      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        {/* Link */}
        <div className="flex gap-6">
          <Link href={"/"} className="flex gap-2 items-center">
            <House className="  cursor-pointer text-blue-600" />
            <span>Home</span>
          </Link>
          <Link href={"/"} className="flex gap-2 items-center">
            <Users className="  cursor-pointer text-blue-600" />
            <span>Friends</span>
          </Link>
          <Link href={"/"} className="flex gap-2 items-center">
            <CircleFadingPlus className="  cursor-pointer text-blue-600" />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent outline-none"
          />
          <Image src={"/search.png"} alt="" width={14} height={14} />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-blue-600"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cusor-pointer">
              <Image src={"/people.png"} alt="" width={24} height={24} />
            </div>
            <div className="cusor-pointer">
              <Image src={"/messages.png"} alt="" width={20} height={20} />
            </div>
            <div className="cusor-pointer">
              <Image src={"/notifications.png"} alt="" width={20} height={20} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 cusor-pointer">
              <CircleUserRound className="  cursor-pointer text-blue-600" />
              <Link href={"/sign-in"}>Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenuComponent />
      </div>
    </div>
  );
}
