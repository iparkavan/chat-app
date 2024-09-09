import { useAuthslice } from "@/store/slices/auth-slice";
import { useChatSlice } from "@/store/slices/chat-slice";
import React, { LegacyRef, useEffect, useRef } from "react";
import moment from "moment";
import { MessagesTypes } from "@/types/messages";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { axios } from "@/lib/axios";
import { GETALLMESSAGESROUTES } from "@/lib/api-routes";

const ChatArea = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { userInfo } = useAuthslice();
  const {
    selectedChatData,
    selectedChatType,
    selectedChatMessages,
    setSelectedChatMessages,
  } = useChatSlice();

  // useEffect to fetch all messages of the users
  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.post(
          GETALLMESSAGESROUTES,
          {
            user2: selectedChatData?._id,
          },
          { withCredentials: true }
        );
        if (response.data.messages) {
          setSelectedChatMessages(response.data.messages);
        }
      } catch (error: any) {
        console.log(error.message);
        toast("Unable to fetch Messages");
      }
    };

    if (selectedChatData?._id) {
      if (selectedChatType === "contact") getMessages();
    }
  }, [selectedChatData, selectedChatType, setSelectedChatMessages]);

  // useEffect for scroll to view bottom when selectedChatMessages changed
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedChatMessages]);

  // Function for rendering all the message types
  const renderMessages = (): JSX.Element | null => {
    let lastDate: string | null = null;
    return selectedChatMessages.map((message: MessagesTypes, index: number) => {
      const messageDate = moment(message.timestamp).format("YYY-MM-DD");
      const showDate = messageDate !== lastDate;
      lastDate = messageDate;

      return (
        <div key={index}>
          {showDate && (
            <div className="text-center text-muted-foreground my-2">
              {moment(message.timestamp).format("LL")}
            </div>
          )}
          {selectedChatType === "contact" && renderDirectMessage(message)}
        </div>
      );
    });
  };

  // Function for direct contact messages
  const renderDirectMessage = (message: MessagesTypes): JSX.Element | null => (
    <div
      className={cn(
        message.sender === selectedChatData?._id ? "text-left" : "text-right"
      )}
    >
      {message.messageType === "text" && (
        <div
          className={cn(
            `inline-block p-4 rounded-2xl my-1 max-w-[50%] break-words`,
            message.sender !== selectedChatData?._id
              ? "bg-primary text-white dark:bg-primary dark:text-black"
              : "bg-white text-primary dark:text-primary dark:bg-black"
          )}
        >
          {message.content}
        </div>
      )}
      <div className="text-xs text-muted-foreground">
        {moment(message.timestamp).format("LT")}
      </div>
    </div>
  );

  return (
    <div className="h-[85vh] overflow-y-scroll w-full">
      <div className="mx-8">
        {renderMessages()}
        <div ref={scrollRef} />
      </div>
    </div>
  );
};

export default ChatArea;
