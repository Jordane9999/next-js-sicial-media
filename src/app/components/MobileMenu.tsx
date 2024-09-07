"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function MobileMenuComponent() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" md:hidden">
      {isOpen ? (
        <X
          className=" w-10 cursor-pointer"
          strokeWidth={3}
          color="#3b82f6"
          size={80}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      ) : (
        <Menu
          className=" w-10 cursor-pointer "
          strokeWidth={3}
          color="#3b82f6"
          size={80}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      )}

      {isOpen && (
        <div className=" absolute left-0 top-24 w-full h-[calc(100vh-96px)]  bg-white flex flex-col items-center justify-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Friends</Link>
          <Link href={"/"}>Groups</Link>
          <Link href={"/"}>Stories</Link>
          <Link href={"/"}>Login</Link>
        </div>
      )}
    </div>
  );
}
