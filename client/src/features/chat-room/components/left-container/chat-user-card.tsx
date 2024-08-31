"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { HOST } from "@/lib/constants/constsnt";
import { useAuthslice } from "@/store/slices/auth-slice";
import Image from "next/image";
import React from "react";

const ChatUserCard = () => {
  const { userInfo } = useAuthslice();

  return (
    <div className="flex w-full cursor-pointer hover:bg-muted rounded-2xl p-2 items-center justify-between">
      <div className="flex items-center justify-start gap-4">
        {userInfo?.profileImage ? (
          <Avatar>
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
        <div>
          <p className="font-semibold text-sm">{userInfo?.firstName}</p>
          <span className="text-xs text-green-700 font-semibold">
            Typing...
          </span>
        </div>
      </div>
      <div className="text-sm text-muted-foreground">12:34pm</div>
    </div>
  );
};

export default ChatUserCard;
