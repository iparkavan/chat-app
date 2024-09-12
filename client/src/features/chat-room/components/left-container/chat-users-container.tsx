import React, { useEffect } from "react";
import ChatUserHeader from "./chat-users-header";
import ChatUserCard from "./chat-user-card";
import { toast } from "sonner";
import { axios } from "@/lib/axios";
import { GET_DM_CONTACTS_ROUTES } from "@/lib/api-routes";

const ChatUsersContainer = () => {

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await axios.get(GET_DM_CONTACTS_ROUTES, {
          withCredentials: true,
        });

        if (response.data.contacts) {
          console.log(response.data.contacts);
        }
      } catch (error: any) {
        console.log(error);
        toast(error.message);
      }
    };
    
    getContacts();
  }, []);

  return (
    <div className="relative">
      <ChatUserHeader />
      {/* Current Chat Users will be displayed here */}
      <section className="p-2 overflow-auto h-[calc(95vh-5vh)]">
        <Heading heading="Direct Message" />

        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />

        <Heading heading="Channels" />

        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
      </section>
    </div>
  );
};

export default ChatUsersContainer;

const Heading = ({ heading }: { heading: string }) => {
  return (
    <h6 className="uppercase tracking-widest text-muted-foreground p-2 font-light text-sm">
      {heading}
    </h6>
  );
};
