import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Session } from "@/components/session";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { MenuIcon } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Collapsible className=" flex min-h-[100dvh] flex-col">
      <Header>
        <Session />
        <CollapsibleTrigger asChild>
          <Button size="icon" className=" flex-none">
            <MenuIcon />
          </Button>
        </CollapsibleTrigger>
      </Header>
      <div className=" flex flex-grow flex-col justify-items-center md:container md:flex-row md:px-4">
        <CollapsibleContent asChild>
          <aside className=" fixed top-[4.5rem] z-40 h-[calc(100dvh_-_4.5rem)] w-full border-b bg-background md:sticky md:w-64 md:border-b-0 md:border-r">
            <ScrollArea className=" h-full">
              <div className=" grid gap-4 p-4">
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
              </div>
            </ScrollArea>
          </aside>
        </CollapsibleContent>
        {children}
      </div>
      <Footer />
    </Collapsible>
  );
}
