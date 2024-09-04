import { create } from "zustand";

type ChatTypes = {
  selectedChatType: undefined
  selectedChatData: undefined
  selectedChatMessages: []
  setSelectedChatType: () => void;
  setSelectedChatData: () => void;
  setSelectedChatMessages: () => void;
  closeChat: () => void;
}

export const useChatSlice = create<ChatTypes>()((set, get) => ({
  selectedChatType: undefined,
  selectedChatData: undefined,
  selectedChatMessages: [],
  setSelectedChatType: (selectedChatType) => set({ selectedChatType }),
  setSelectedChatData: (selectedChatData) => set({ selectedChatData }),
  setSelectedChatMessages: (selectedChatMessages) => set({ selectedChatMessages }),
  closeChat: () => set({
    selectedChatType: undefined,
    selectedChatData: undefined,
    selectedChatMessages: [],
  })
}));
