"use client";

import ChatUsersContainer from "@/features/chat-room/components/left-container/chat-users-container";
import ChatContainer from "@/features/chat-room/components/right-container/chat-container";
import { useAuthslice } from "@/store/slices/auth-slice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { routes } from "@/lib/constants/routes";
import { toast } from "sonner";
import WelcomeContainer from "@/features/chat-room/components/right-container/welcome-container";
import Sidebar from "@/common/sidebar";

export default function Home() {
  const router = useRouter();
  const isChatting = false;

  const { userInfo } = useAuthslice();

  useEffect(() => {
    if (!userInfo?.profileSetup) {
      toast("Please setup your profile to continue.");
      router.push(routes.profileSetup);
    }
  }, [userInfo?.profileSetup, router]);

  return (
    <main className="">
      {/* <ResizableMainContent children={undefined} /> */}
      {/* <div className="grid grid-cols-4 border rounded-2xl">
        <div className="border-r">
          <ChatUsersContainer />
        </div>
        <div className="w-full col-span-3">
          {isChatting ? (
            <div className="flex items-center justify-center h-full">
              <WelcomeContainer />
            </div>
          ) : (
            <div className="">
              <ChatContainer />
            </div>
          )}
        </div>
      </div> */}
      <div className="flex min-h-[95vh]">
        <div className="border-r">
          <Sidebar />
        </div>
        <div className="border-r min-w-[400px]">
          <ChatUsersContainer />
        </div>
        <div className="w-full">
          {isChatting ? (
            <div className="flex items-center justify-center h-full">
              <WelcomeContainer />
            </div>
          ) : (
            <div className="">
              <ChatContainer />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
