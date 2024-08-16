"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import React, { ChangeEvent, FormEvent, useState } from "react";

const ChatForm = () => {
  const [message, setMessage] = useState<string>("");

  const messageHandler = (e: FormEvent) => {
    e.preventDefault();
    alert(message);
    setMessage("");
  };

  return (
    <div className="flex items-center justify-start gap-2">
      <div className="flex items-center justify-center gap-1">
        <Button variant={"ghost"} size={"icon"}>
          <ChevronRightIcon className="" />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <ChevronRightIcon className="" />
        </Button>
      </div>
      <form className="w-full flex items-center" onSubmit={messageHandler}>
        <input
          className="flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setMessage(e.target.value)
          }
          value={message}
          placeholder="Type a message"
        />
        <Button variant={"ghost"} type="submit" size={"icon"}>
          <ChevronRightIcon className="" />
        </Button>
      </form>
      <div></div>
    </div>
  );
};

export default ChatForm;
