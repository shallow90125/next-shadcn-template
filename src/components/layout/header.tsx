"use client";

import Link from "next/link";

export function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className=" sticky top-0 z-50 grid h-[4.5rem] flex-none place-content-stretch border-b bg-background">
      <div className=" flex place-items-center gap-4 p-4 md:container">
        <Link
          href="/dashboard"
          className=" flex-none rounded text-lg font-bold text-primary"
        >
          Create Next App
        </Link>
        <div className=" flex flex-grow justify-end gap-4">{children}</div>
      </div>
    </header>
  );
}
