"use client";

import { Button } from "@/components/ui/button";
import { useAuthslice } from "@/store/slices/auth-slice";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

const ChatHeader = () => {
  const { userInfo } = useAuthslice();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start gap-4">
        <div className="relative">
          <Image
            className=" rounded-full"
            src={userInfo?.profileImage || ""}
            alt=""
            width={44}
            height={44}
          />
        </div>
        <div>
          <div>
            <p className="font-semibold text-sm">Park Avan (You)</p>
            {/* <span className="text-xs text-green-700 font-semibold">
                Typing...
              </span> */}
          </div>
        </div>
      </div>

      <div className="">
        <Button variant={'ghost'} size={"icon"}>
          <ChevronRightIcon className="" />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
