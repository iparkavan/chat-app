"use client";

import { ResizableMainContent } from "@/common/resizeble-main-content";
import ChatUsersContainer from "@/features/chat-room/components/left-container/chat-users-container";
import ChatContainer from "@/features/chat-room/components/right-container/chat-container";
import ChatForm from "@/features/chat-room/components/right-container/chat-form";
import { ACCESS_TOKEN } from "@/lib/authentications";
import { axios, axiosPrivate } from "@/lib/axios";
import { useAuthslice } from "@/store/slices/auth-slice";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { routes } from "@/lib/constants/routes";

export default function Home() {
  const router = useRouter();

  const { userInfo, setUserInfo, setAccessToken } = useAuthslice();

  useEffect(() => {
    if (!userInfo?.profileSetup) {
      toast("Please setup your profile to continue.");
      router.push(routes.profileSetup);
    }
  }, []);

  // useEffect(() => {
  //   const getUserInfo = async () => {
  //     const response = await axiosPrivate.get(`/api/auth/get-userinfo`);
  //     console.log(response?.data);
  //   };

  //   if (!userInfo) {
  //     getUserInfo();
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, [userInfo, setUserInfo]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <main className="">
      {/* <ResizableMainContent children={undefined} /> */}
      <div className="grid grid-cols-4 border rounded-2xl">
        <div className="border-r">
          <ChatUsersContainer />
        </div>
        <div className="w-full col-span-3 relative">
          <ChatContainer />
          <div className="absolute bottom-0 w-full p-1 border-t">
            <ChatForm />
          </div>
        </div>
      </div>
    </main>
  );
}
