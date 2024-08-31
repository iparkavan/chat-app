"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { GrAttachment } from "react-icons/gr";
import { RiEmojiStickerLine } from "react-icons/ri";
import { IoSend } from "react-icons/io5";
import EmojiPicker, { Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";

const ChatForm = () => {
  const emojiRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const [message, setMessage] = useState<string>("");
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState<boolean>(false);

  //useEffect to Close the Emoji Component
  useEffect(() => {
    const clickOutsideHandler = (event: MouseEvent) => {
      if (
        emojiRef.current &&
        !emojiRef.current.contains(event.target as Node)
      ) {
        setIsEmojiPickerOpen(false);
      }
    };

    document.addEventListener("mousedown", clickOutsideHandler);
    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, [emojiRef]);

  // Handling the Emojies
  const emojiHandler = (emoji: { emoji: string }) => {
    setMessage((msg) => msg + emoji.emoji);
  };

  // Function for sending the messages
  const messageHandler = (e: FormEvent) => {
    e.preventDefault();
    alert(message);
    setMessage("");
  };

  return (
    <div className="flex items-center justify-start gap-2 h-[4.8vh] relative">
      <div className="flex items-center justify-center gap-1">
        <Button
          variant={"ghost"}
          type="submit"
          size={"icon"}
          className="text-muted-foreground"
        >
          <GrAttachment className="text-xl" />
        </Button>
        <Button
          variant={"ghost"}
          type="submit"
          size={"icon"}
          className="text-muted-foreground"
          onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
        >
          <RiEmojiStickerLine className="text-xl" />
        </Button>

        {/* Emoji Picker Code */}
        <div className="absolute bottom-16 left-0" ref={emojiRef}>
          <EmojiPicker
            theme={theme as Theme}
            open={isEmojiPickerOpen}
            onEmojiClick={emojiHandler}
            autoFocusSearch={false}
          />
        </div>
      </div>
      <form className="w-full flex items-center" onSubmit={messageHandler}>
        <input
          className="flex w-full rounded-md bg-transparent px-3 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setMessage(e.target.value)
          }
          value={message}
          placeholder="Type a message"
        />
        <Button
          variant={"ghost"}
          type="submit"
          size={"icon"}
          className="text-white bg-primary"
        >
          <IoSend className="text-xl" />
        </Button>
      </form>
      <div></div>
    </div>
  );
};

export default ChatForm;
