import Link from "next/link";

export function Footer() {
  return (
    <footer className=" grid h-[4.5rem] place-content-stretch border-t">
      <div className=" flex place-content-center place-items-center gap-4 p-4 md:container">
        <Link href="/" className=" text-primary">
          &copy; 2023 Create Next App
        </Link>
      </div>
    </footer>
  );
}
