"use client";

import { useAuthslice } from "@/store/slices/auth-slice";
import Image from "next/image";
import React from "react";

const ChatUserCard = () => {
  const { userInfo } = useAuthslice();

  return (
    <div className="flex w-full hover:bg-muted rounded-2xl p-2 items-center justify-between">
      <div className="flex items-center justify-start gap-4">
        {userInfo?.profileImage && (
          <div className="relative">
            <Image
              className=" rounded-full"
              src={userInfo?.profileImage || ""}
              alt=""
              width={44}
              height={44}
            />
          </div>
        )}
        <div>
          <p className="font-semibold text-sm">Park Avan (You)</p>
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
