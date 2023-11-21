import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Session } from "@/components/session";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header>
        <Session />
      </Header>
      <main className=" grid min-h-[calc(100dvh_-_4.5rem)] place-content-center place-items-center gap-8 p-4">
        <div className=" grid place-items-center gap-4 p-4">
          <div className=" bg-gradient-to-br from-primary to-orange-600 bg-clip-text p-4 text-center text-6xl font-bold text-transparent">
            D is for Delightful
          </div>
          <div className=" text-center text-2xl text-muted-foreground">
            You should know you&apos;re his favourite worst nightmare
          </div>
        </div>
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
      </main>
      <Footer />
    </>
  );
}
