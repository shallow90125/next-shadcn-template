"use client";

import { User2Icon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export function Session() {
  return true ? (
    <Avatar className=" flex-none">
      <AvatarImage src="https://github.com/shallow9025.png" />
      <AvatarFallback>
        <User2Icon />
      </AvatarFallback>
    </Avatar>
  ) : (
    <Button>Sign in</Button>
  );
}
