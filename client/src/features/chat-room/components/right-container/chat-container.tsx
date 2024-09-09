import React from "react";
import ChatHeader from "./chat-header";
import ChatForm from "./chat-form";
import ChatArea from "./chat-area";

const ChatContainer = () => {
  return (
    <div className="">
      <div className="px-8 border-b">
        <ChatHeader />
      </div>

      <div className="flex items-center justify-center">
        <ChatArea />
      </div>

      <div className="px-2 border-t">
        <ChatForm />
      </div>
    </div>
  );
};

export default ChatContainer;

// absolute bottom-0
