import { UserInfoTypes } from "@/types/authentication-types";
import { ContactsTypes } from "@/types/contacts-types";
import { MessagesTypes } from "@/types/messages";
import { create } from "zustand";

type ChatTypes = "channel" | "contact";

type ChatSliceTypes = {
  selectedChatType: ChatTypes | undefined;
  selectedChatData: ContactsTypes | undefined;
  selectedChatMessages: MessagesTypes[] | any;
  setSelectedChatType: (selectedChatType: ChatTypes) => void;
  setSelectedChatData: (selectedChatData: ContactsTypes) => void;
  setSelectedChatMessages: (selectedChatMessages: MessagesTypes) => void;
  closeChat: () => void;
  addMessage: (message: any) => void;
};

export const useChatSlice = create<ChatSliceTypes>()((set, get) => ({
  selectedChatType: undefined,
  selectedChatData: undefined,
  selectedChatMessages: [],
  setSelectedChatType: (selectedChatType: ChatTypes) =>
    set({ selectedChatType }),
  setSelectedChatData: (selectedChatData: ContactsTypes) =>
    set({ selectedChatData }),
  setSelectedChatMessages: (selectedChatMessages: MessagesTypes) =>
    set({ selectedChatMessages }),
  closeChat: () =>
    set({
      selectedChatType: undefined,
      selectedChatData: undefined,
      selectedChatMessages: [],
    }),

  addMessage: (message) => {
    const selectedChatMessages = get().selectedChatMessages;
    const selectedChatType = get().selectedChatType;

    set({
      selectedChatMessages: [
        ...selectedChatMessages,
        {
          ...message,
          recipient:
            selectedChatType === "channel"
              ? message.recipient
              : message.recipient._id,
          sender:
            selectedChatType === "channel"
              ? message.sender
              : message.sender._id,
        },
      ],
    });
  },
}));
