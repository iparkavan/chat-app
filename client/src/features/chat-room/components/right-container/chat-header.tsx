"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { HOST } from "@/lib/constants/constsnt";
import { useAuthslice } from "@/store/slices/auth-slice";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

const ChatHeader = () => {
  const { userInfo } = useAuthslice();

  return (
    <div className="flex h-[6vh] items-center justify-between">
      <div className="flex items-center justify-start gap-4">
        <div className="relative">
          {userInfo?.profileImage ? (
            <Avatar className="h-12 w-12">
              <AvatarImage
                src={`${HOST}/${userInfo?.profileImage}` || ""}
                alt="profile"
                className="object-cover w-full h-full"
              />
            </Avatar>
          ) : (
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
          )}
        </div>
        <div>
          <div>
            <p className="font-semibold text-sm">{userInfo?.firstName}</p>
            {/* <span className="text-xs text-green-700 font-semibold">
                Typing...
              </span> */}
          </div>
        </div>
      </div>

      <div className="">
        <Button variant={"ghost"} size={"icon"}>
          <ChevronRightIcon className="" />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
