"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { bgColors, HOST } from "@/lib/constants/constsnt";
import { useAuthslice } from "@/store/slices/auth-slice";
import { useChatSlice } from "@/store/slices/chat-slice";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { RiCloseFill } from "react-icons/ri";

const ChatHeader = () => {
  const { userInfo } = useAuthslice();
  const { closeChat } = useChatSlice();

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
            <>
              <div
                className={`uppercase text-white h-12 w-12 text-lg border flex items-center justify-center rounded-full`}
                style={{
                  backgroundColor: bgColors[userInfo?.bgColor as number],
                  transition: "all .3s",
                }}
              >
                {userInfo?.firstName && userInfo.lastName
                  ? `${userInfo?.firstName.split("").shift()}${userInfo.lastName
                      .split("")
                      .shift()}`
                  : userInfo?.email?.split("").shift()}
              </div>
            </>
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
          <RiCloseFill className="" onClick={closeChat} />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
