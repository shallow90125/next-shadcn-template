import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default async function Page() {
  return (
    <main className=" grid flex-grow place-items-stretch gap-4 p-4">
      <Link href="/">
        <Button>Root</Button>
      </Link>
      <Skeleton className=" h-16 rounded" />
      <Skeleton className=" h-16 rounded" />
      <Skeleton className=" h-16 rounded" />
      <Skeleton className=" h-16 rounded" />
      <Skeleton className=" h-16 rounded" />
      <Skeleton className=" h-16 rounded" />
      <Skeleton className=" h-16 rounded" />
      <Skeleton className=" h-16 rounded" />
      <Skeleton className=" h-16 rounded" />
      <Skeleton className=" h-16 rounded" />
      <Skeleton className=" h-16 rounded" />
      <Skeleton className=" h-16 rounded" />
      <Skeleton className=" h-16 rounded" />
      <Skeleton className=" h-16 rounded" />
      <Skeleton className=" h-16 rounded" />
      <Skeleton className=" h-16 rounded" />
    </main>
  );
}
