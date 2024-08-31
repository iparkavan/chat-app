import React from "react";
import ChatUserHeader from "./chat-users-header";
import ChatUserCard from "./chat-user-card";

const ChatUsersContainer = () => {
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
