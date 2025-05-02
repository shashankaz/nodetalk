"use client";

import { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const userData = [
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: true,
    messages: [
      { role: "user", content: "Where are u right now?", time: "10:00" },
      { role: "assistant", content: "I am at the New Mall", time: "10:01" },
      { role: "user", content: "Oh nice! Are you shopping?", time: "10:07" },
      {
        role: "assistant",
        content: "Yes, just looking for some new shoes.",
        time: "10:13",
      },
      {
        role: "user",
        content: "Did you find anything you like?",
        time: "10:19",
      },
      {
        role: "assistant",
        content: "Not yet, but I saw a few good options.",
        time: "10:22",
      },
      {
        role: "user",
        content: "Let me know if you need any suggestions!",
        time: "10:25",
      },
      {
        role: "assistant",
        content: "Thanks! I'll send you some pictures.",
        time: "10:29",
      },
      {
        role: "user",
        content: "Cool! Are you planning to grab lunch there?",
        time: "10:34",
      },
      {
        role: "assistant",
        content: "Yes, probably at the food court. Any recommendations?",
        time: "10:38",
      },
      {
        role: "user",
        content: "Try the new sushi place, it's really good.",
        time: "10:41",
      },
      {
        role: "assistant",
        content: "Sounds great, I'll check it out. Thanks!",
        time: "10:44",
      },
      {
        role: "user",
        content: "No problem! Let me know how it is.",
        time: "10:47",
      },
      {
        role: "assistant",
        content: "Will do! Talk to you later.",
        time: "10:50",
      },
      {
        role: "user",
        content: "Send me a pic if you try the sushi!",
        time: "10:55",
      },
      {
        role: "assistant",
        content: "Sure thing! I'll text you soon.",
        time: "11:01",
      },
    ],
  },
  {
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    isActive: false,
    messages: [
      { role: "user", content: "Hey Jane, how's your day?", time: "09:00" },
      {
        role: "assistant",
        content: "Pretty good! Just finished my workout.",
        time: "09:03",
      },
      { role: "user", content: "Nice! What did you do?", time: "09:07" },
      {
        role: "assistant",
        content: "A bit of yoga and some cardio.",
        time: "09:12",
      },
      {
        role: "user",
        content: "Impressive! Early morning workout?",
        time: "09:15",
      },
      {
        role: "assistant",
        content: "Yeah, helps me stay energized.",
        time: "09:18",
      },
      { role: "user", content: "Maybe I should try that too.", time: "09:22" },
      {
        role: "assistant",
        content: "You should! Want to join me tomorrow?",
        time: "09:25",
      },
      { role: "user", content: "Sure, what time?", time: "09:29" },
      { role: "assistant", content: "6:30 AM at the park.", time: "09:32" },
    ],
  },
  {
    name: "Michael Lee",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    isActive: true,
    messages: [
      {
        role: "user",
        content: "Did you watch the game last night?",
        time: "20:00",
      },
      { role: "assistant", content: "Yes! It was intense.", time: "20:04" },
      {
        role: "user",
        content: "Can't believe that last-minute goal.",
        time: "20:09",
      },
      {
        role: "assistant",
        content: "Me neither, what a finish!",
        time: "20:13",
      },
      { role: "user", content: "Who's your MVP?", time: "20:17" },
      { role: "assistant", content: "Definitely the goalie!", time: "20:20" },
      {
        role: "user",
        content: "Agreed. Want to catch the next match together?",
        time: "20:25",
      },
      { role: "assistant", content: "Absolutely, let's do it.", time: "20:29" },
    ],
  },
  {
    name: "Emily Clark",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    isActive: false,
    messages: [
      { role: "user", content: "Are you coming to the party?", time: "18:00" },
      { role: "assistant", content: "Yes, I'll be there at 8!", time: "18:05" },
      { role: "user", content: "Awesome, see you then!", time: "18:11" },
      { role: "assistant", content: "See you!", time: "18:13" },
      { role: "user", content: "Bring your favorite snacks!", time: "18:17" },
      { role: "assistant", content: "Will do! Can't wait.", time: "18:21" },
    ],
  },
  {
    name: "David Kim",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    isActive: true,
    messages: [
      { role: "user", content: "How's the new project going?", time: "11:00" },
      {
        role: "assistant",
        content: "It's challenging but fun.",
        time: "11:06",
      },
      { role: "user", content: "Let me know if you need help.", time: "11:11" },
      { role: "assistant", content: "Will do, thanks!", time: "11:14" },
      { role: "user", content: "Are you working with Sarah?", time: "11:18" },
      {
        role: "assistant",
        content: "Yes, she's great to work with.",
        time: "11:22",
      },
      { role: "user", content: "Awesome, good luck!", time: "11:27" },
      { role: "assistant", content: "Thanks, appreciate it!", time: "11:30" },
    ],
  },
  {
    name: "Sophia Turner",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    isActive: false,
    messages: [
      { role: "user", content: "Did you finish the book?", time: "15:00" },
      { role: "assistant", content: "Yes, it was amazing!", time: "15:04" },
      {
        role: "user",
        content: "I told you! The ending is wild.",
        time: "15:09",
      },
      {
        role: "assistant",
        content: "Absolutely, I didn't see it coming.",
        time: "15:13",
      },
      { role: "user", content: "What are you reading next?", time: "15:17" },
      {
        role: "assistant",
        content: "Thinking about a mystery novel.",
        time: "15:21",
      },
      {
        role: "user",
        content: "Let me know if you need recommendations.",
        time: "15:25",
      },
      { role: "assistant", content: "Will do, thanks!", time: "15:29" },
    ],
  },
  {
    name: "Chris Evans",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    isActive: true,
    messages: [
      { role: "user", content: "Are you free this weekend?", time: "13:00" },
      { role: "assistant", content: "Yes, let's catch up!", time: "13:05" },
      { role: "user", content: "Great, I'll call you.", time: "13:11" },
      { role: "assistant", content: "Looking forward to it.", time: "13:14" },
      {
        role: "user",
        content: "Let's meet at the coffee shop?",
        time: "13:18",
      },
      { role: "assistant", content: "Perfect, see you there!", time: "13:22" },
    ],
  },
  {
    name: "Olivia Brown",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    isActive: false,
    messages: [
      { role: "user", content: "How was your trip?", time: "16:00" },
      {
        role: "assistant",
        content: "It was fantastic! Loved the beaches.",
        time: "16:03",
      },
      { role: "user", content: "Send me some photos!", time: "16:08" },
      { role: "assistant", content: "Will do!", time: "16:12" },
      { role: "user", content: "Did you try surfing?", time: "16:16" },
      { role: "assistant", content: "Yes! It was so much fun.", time: "16:19" },
      {
        role: "user",
        content: "Can't wait to hear all about it.",
        time: "16:23",
      },
      { role: "assistant", content: "Let's meet soon!", time: "16:27" },
    ],
  },
  {
    name: "Daniel Martinez",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    isActive: true,
    messages: [
      { role: "user", content: "Did you get the tickets?", time: "17:00" },
      {
        role: "assistant",
        content: "Yes, we're all set for Friday.",
        time: "17:04",
      },
      { role: "user", content: "Awesome, can't wait!", time: "17:09" },
      { role: "assistant", content: "Me too!", time: "17:13" },
      { role: "user", content: "What time should we meet?", time: "17:17" },
      { role: "assistant", content: "Let's meet at 6:30 PM.", time: "17:21" },
      { role: "user", content: "Perfect, see you then!", time: "17:25" },
      { role: "assistant", content: "See you!", time: "17:29" },
    ],
  },
  {
    name: "Ava Wilson",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    isActive: false,
    messages: [
      { role: "user", content: "Are you joining the call?", time: "14:00" },
      { role: "assistant", content: "Yes, logging in now.", time: "14:03" },
      { role: "user", content: "Great, see you there.", time: "14:07" },
      { role: "assistant", content: "See you!", time: "14:11" },
      { role: "user", content: "Don't forget the slides.", time: "14:15" },
      { role: "assistant", content: "Already uploaded them.", time: "14:19" },
      { role: "user", content: "Awesome, thanks!", time: "14:23" },
      { role: "assistant", content: "No problem!", time: "14:27" },
    ],
  },
  {
    name: "Matthew Scott",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    isActive: true,
    messages: [
      { role: "user", content: "How's your new job?", time: "12:00" },
      { role: "assistant", content: "It's going well, thanks!", time: "12:04" },
      { role: "user", content: "Glad to hear that.", time: "12:09" },
      { role: "assistant", content: "Appreciate it!", time: "12:13" },
      { role: "user", content: "Are you working from home?", time: "12:17" },
      { role: "assistant", content: "Yes, mostly remote.", time: "12:21" },
      {
        role: "user",
        content: "Let's catch up for lunch soon.",
        time: "12:25",
      },
      { role: "assistant", content: "Sounds good!", time: "12:29" },
    ],
  },
  {
    name: "Mia Johnson",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    isActive: false,
    messages: [
      { role: "user", content: "Did you see my email?", time: "08:00" },
      { role: "assistant", content: "Yes, I'll reply soon.", time: "08:03" },
      { role: "user", content: "No rush, just checking.", time: "08:07" },
      {
        role: "assistant",
        content: "Thanks for letting me know.",
        time: "08:11",
      },
      {
        role: "user",
        content: "Are you free for a call later?",
        time: "08:15",
      },
      { role: "assistant", content: "Yes, after 10 AM works.", time: "08:19" },
      { role: "user", content: "Perfect, I'll send an invite.", time: "08:23" },
      { role: "assistant", content: "See you then!", time: "08:27" },
    ],
  },
  {
    name: "Lucas Green",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    isActive: true,
    messages: [
      {
        role: "user",
        content: "Morning Lucas! Ready for the hike?",
        time: "07:12",
      },
      {
        role: "assistant",
        content: "Absolutely! Packing my bag now.",
        time: "07:15",
      },
      {
        role: "user",
        content: "Don't forget water and snacks.",
        time: "07:18",
      },
      {
        role: "assistant",
        content: "Got it! See you at the trailhead.",
        time: "07:25",
      },
      { role: "user", content: "On my way!", time: "07:29" },
      { role: "assistant", content: "Drive safe!", time: "07:31" },
    ],
  },
  {
    name: "Ella White",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    isActive: false,
    messages: [
      {
        role: "user",
        content: "How's your painting coming along?",
        time: "21:03",
      },
      {
        role: "assistant",
        content: "Almost done! Adding final touches.",
        time: "21:07",
      },
      { role: "user", content: "Can't wait to see it.", time: "21:12" },
      {
        role: "assistant",
        content: "I'll send you a photo tonight.",
        time: "21:18",
      },
      { role: "user", content: "Awesome, thanks!", time: "21:22" },
    ],
  },
  {
    name: "Noah Carter",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    isActive: true,
    messages: [
      {
        role: "user",
        content: "Did you finish the assignment?",
        time: "23:00",
      },
      { role: "assistant", content: "Just submitted it!", time: "23:03" },
      { role: "user", content: "Nice, now we can relax.", time: "23:07" },
      { role: "assistant", content: "Movie night?", time: "23:10" },
      { role: "user", content: "Yes! I'll bring popcorn.", time: "23:15" },
    ],
  },
  {
    name: "Grace Hall",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    isActive: false,
    messages: [
      {
        role: "user",
        content: "Are you free for coffee tomorrow?",
        time: "19:30",
      },
      { role: "assistant", content: "Yes, what time?", time: "19:33" },
      { role: "user", content: "How about 10:30 AM?", time: "19:36" },
      { role: "assistant", content: "Perfect, see you then!", time: "19:39" },
      { role: "user", content: "Looking forward to it!", time: "19:41" },
    ],
  },
  {
    name: "Henry Adams",
    avatar: "https://randomuser.me/api/portraits/men/17.jpg",
    isActive: false,
    messages: [
      {
        role: "user",
        content: "Did you get my message about the meeting?",
        time: "17:45",
      },
      { role: "assistant", content: "Yes, I'll be there at 6.", time: "17:48" },
      { role: "user", content: "Great, see you soon.", time: "17:52" },
      { role: "assistant", content: "See you!", time: "17:55" },
      { role: "user", content: "Bring the project files.", time: "17:58" },
      { role: "assistant", content: "Already packed!", time: "18:01" },
    ],
  },
];

interface User {
  name: string;
  avatar: string;
  isActive: boolean;
  messages: {
    role: string;
    content: string;
    time: string;
  }[];
}

interface Message {
  role: string;
  content: string;
  time: string;
}

const Home = () => {
  const [chat, setChat] = useState<User>({
    name: "",
    avatar: "",
    isActive: false,
    messages: [],
  });
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>(chat.messages || []);
  const [currentChatName, setCurrentChatName] = useState<string>("");

  useEffect(() => {
    const eventListener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenChat(false);
      }
    };

    window.addEventListener("keydown", eventListener);

    return () => {
      window.removeEventListener("keydown", eventListener);
    };
  }, []);

  useEffect(() => {
    setMessages(chat.messages || []);
    setCurrentChatName(chat.name || "");
  }, [chat]);

  return (
    <div className={`h-screen flex flex-col ${inter.className}`}>
      <Navbar />
      <main className="flex justify-between flex-1 min-h-0">
        <FriendsList
          className={`sm:w-1/2 lg:w-1/4 flex-1 min-h-0 ${
            openChat ? "hidden sm:block" : "block"
          }`}
          setChat={setChat}
          setOpenChat={setOpenChat}
          messages={messages}
          setMessages={setMessages}
          currentChatName={currentChatName}
        />
        {openChat ? (
          <ChatPage
            className={`sm:block sm:w-1/2 lg:w-1/2 ${
              openChat ? "block" : "hidden"
            }`}
            chat={chat}
            messages={messages}
            setMessages={setMessages}
          />
        ) : (
          <BlankChatPage className="hidden sm:block sm:w-1/2 lg:w-1/2" />
        )}
        {openChat && (
          <UserProfile className="hidden lg:block lg:w-1/4" chat={chat} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;

interface FriendsListProps {
  className?: string;
  setChat: (chat: User) => void;
  setOpenChat: (openChat: boolean) => void;
  setMessages: (messages: User["messages"]) => void;
  messages: User["messages"];
  currentChatName?: string;
}

const FriendsList: React.FC<FriendsListProps> = ({
  className,
  setChat,
  setOpenChat,
  setMessages,
  messages,
  currentChatName,
}) => {
  const [search, setSearch] = useState("");

  return (
    <div
      className={`border-r border-gray-200 px-4 overflow-y-auto ${className}`}
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex items-center justify-between py-4">
        <h6 className="font-semibold text-lg">Friends Online</h6>{" "}
        <span className="text-gray-500 text-sm">
          {userData.filter((data) => data.isActive).length}
        </span>
      </div>
      <div
        className="flex items-center gap-2 overflow-y-auto border-b border-gray-200 pb-6"
        style={{ scrollbarWidth: "none" }}
      >
        {userData
          .filter((data) => data.isActive)
          .map((data, index) => (
            <FriendsLiveIcon
              key={index}
              src={data.avatar}
              data={data}
              setChat={setChat}
              setOpenChat={setOpenChat}
            />
          ))}
      </div>
      <div>
        <h6 className="font-semibold text-lg py-4">Chats</h6>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Chat"
            className="border border-gray-400 rounded-full pr-4 pl-10 py-2 w-full text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-4 top-3 size-3">
            <Search />
          </span>
        </div>
        <div className="pt-4">
          {userData
            .filter((friend) =>
              friend.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((friend, index) => {
              const isCurrent = friend.name === currentChatName;
              const lastMsgArr = isCurrent ? messages : friend.messages;
              const lastMsg = lastMsgArr[lastMsgArr.length - 1];
              return (
                <FriendsChat
                  key={index}
                  name={friend.name}
                  lastMessage={lastMsg?.content || ""}
                  time={lastMsg?.time || ""}
                  avatar={friend.avatar}
                  isActive={friend.isActive}
                  data={friend}
                  setChat={setChat}
                  setOpenChat={setOpenChat}
                  setMessages={setMessages}
                  messages={isCurrent ? messages : friend.messages}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

interface FriendsLiveIconProps {
  src: string;
  data: User;
  setChat: (chat: User) => void;
  setOpenChat: (openChat: boolean) => void;
}

const FriendsLiveIcon: React.FC<FriendsLiveIconProps> = ({
  src,
  data,
  setChat,
  setOpenChat,
}) => {
  return (
    <div
      className="size-16 min-w-16 rounded-full relative cursor-pointer"
      onClick={() => {
        setChat(data);
        setOpenChat(true);
      }}
    >
      <Image
        src={src}
        alt={src}
        width={100}
        height={100}
        className="rounded-full shadow-md"
      />
      <div className="size-3 rounded-full bg-green-500 border-[2px] border-white absolute right-1 bottom-1"></div>
    </div>
  );
};

interface FriendsChatProps {
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
  isActive: boolean;
  data: User;
  setChat: (chat: User) => void;
  setOpenChat: (openChat: boolean) => void;
  setMessages: (messages: User["messages"]) => void;
  messages: User["messages"];
}

const FriendsChat: React.FC<FriendsChatProps> = ({
  name,
  lastMessage,
  time,
  avatar,
  isActive,
  data,
  setChat,
  setOpenChat,
  setMessages,
  messages,
}) => {
  return (
    <div
      className="flex items-center justify-between border-b border-gray-200 pb-5 pt-2 cursor-pointer"
      onClick={() => {
        setChat(data);
        setOpenChat(true);
        setMessages(data.messages);
      }}
    >
      <div className="flex items-center gap-3">
        <div className="size-16 min-w-16 relative">
          <Image
            src={avatar}
            alt={name}
            width={100}
            height={100}
            className="rounded-full shadow-md"
          />
          {isActive && (
            <div className="size-3 rounded-full bg-green-500 border-[2px] border-white absolute right-1 bottom-1"></div>
          )}
        </div>
        <div>
          <h6 className="text-lg font-semibold">{name}</h6>
          <p className="text-sm text-gray-500">
            {messages[messages.length - 1]?.content || lastMessage}
          </p>
        </div>
      </div>
      <span className="text-sm text-gray-500">{time}</span>
    </div>
  );
};

const EMOJIS = ["😀", "😂", "😍", "👍", "🎉"];

interface ChatPageProps {
  className?: string;
  chat: User;
  messages: {
    role: string;
    content: string;
    time: string;
    reaction?: string;
  }[];
  setMessages: React.Dispatch<
    React.SetStateAction<
      {
        role: string;
        content: string;
        time: string;
        reaction?: string;
      }[]
    >
  >;
}

const ChatPage: React.FC<ChatPageProps> = ({
  className,
  chat,
  messages,
  setMessages,
}) => {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [emojiPicker, setEmojiPicker] = useState<{
    visible: boolean;
    x: number;
    y: number;
    messageIdx: number | null;
  }>({ visible: false, x: 0, y: 0, messageIdx: null });

  const handleAddEmoji = (emoji: string) => {
    if (emojiPicker.messageIdx === null) return;
    setMessages((prev) =>
      prev.map((msg, idx) => {
        if (idx !== emojiPicker.messageIdx) return msg;
        return { ...msg, reaction: emoji };
      })
    );
    setEmojiPicker({ visible: false, x: 0, y: 0, messageIdx: null });
  };

  useEffect(() => {
    const handleClick = () => {
      if (emojiPicker.visible)
        setEmojiPicker({ visible: false, x: 0, y: 0, messageIdx: null });
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [emojiPicker.visible]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    messagesEndRef.current?.scrollTo({ top: 0 });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setMessages([
      ...messages,
      {
        role: "user",
        content: input,
        time,
      },
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div
      className={`flex flex-col items-start justify-between px-6 overflow-y-auto ${className}`}
      style={{ scrollbarWidth: "none" }}
    >
      <div className="h-20 sticky top-0 w-full z-10 bg-white pt-4">
        <span className="text-sm font-medium text-gray-400">Chat with</span>
        <h3 className="text-2xl font-semibold">{chat.name}</h3>
      </div>
      <div className="w-full px-4" style={{ scrollbarWidth: "none" }}>
        {messages?.map((chat, index) => {
          return (
            <div
              key={index}
              onContextMenu={(e) => {
                e.preventDefault();
                setEmojiPicker({
                  visible: true,
                  x: e.clientX,
                  y: e.clientY,
                  messageIdx: index,
                });
              }}
              style={{ position: "relative" }}
            >
              <ChatBubble
                role={chat.role}
                content={chat.content}
                time={chat.time}
                reaction={chat.reaction}
              />
            </div>
          );
        })}
        <div ref={messagesEndRef} />
        {input && (
          <div className="flex flex-col items-end mt-2">
            <div className="rounded-t-3xl rounded-bl-3xl bg-gray-100 w-fit p-4 flex items-center gap-1">
              <div className="size-3 rounded-full bg-gray-300 animate-pulse"></div>
              <div className="size-3 rounded-full bg-gray-300 animate-pulse"></div>
              <div className="size-3 rounded-full bg-gray-300 animate-pulse"></div>
            </div>
          </div>
        )}
        {emojiPicker.visible && (
          <div
            style={{
              position: "fixed",
              top: emojiPicker.y,
              left: emojiPicker.x,
              zIndex: 1000,
              background: "white",
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              minWidth: 120,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-2 flex-wrap">
              {EMOJIS.map((emoji) => (
                <button
                  key={emoji}
                  className="text-xl hover:bg-gray-100 rounded"
                  onClick={() => handleAddEmoji(emoji)}
                  style={{ cursor: "pointer" }}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="w-full flex items-center gap-2 p-4 sticky bottom-0 bg-white">
        <input
          type="text"
          placeholder="Type your message"
          className="border rounded-md w-full outline-none py-2 px-3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-purple-500 text-white rounded-md p-2 cursor-pointer"
          onClick={handleSend}
        >
          <span className="size-6 flex items-center justify-center">
            <Send />
          </span>
        </button>
      </div>
    </div>
  );
};

interface ChatBubbleProps {
  role: string;
  content: string;
  time: string;
  reaction?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  role,
  content,
  time,
  reaction,
}) => {
  return (
    <div className="w-full">
      {role === "assistant" ? (
        <div className="flex flex-col items-start">
          <div>
            <p className="rounded-t-3xl rounded-br-3xl bg-purple-100 shadow-md w-fit p-4">
              {content}
            </p>
            {reaction && (
              <span
                className="text-2xl select-none"
                style={{
                  position: "relative",
                  left: 8,
                  top: 0,
                  display: "inline-block",
                  marginTop: 2,
                }}
              >
                {reaction}
              </span>
            )}
          </div>
          <span className="text-xs text-gray-400 mt-1">{time}</span>
        </div>
      ) : (
        <div className="flex flex-col items-end mt-2">
          <div>
            <p className="rounded-t-3xl rounded-bl-3xl bg-gray-100 shadow-md w-fit p-4">
              {content}
            </p>
            {reaction && (
              <span
                className="text-2xl select-none"
                style={{
                  position: "relative",
                  right: 8,
                  top: 0,
                  display: "inline-block",
                  marginTop: 2,
                }}
              >
                {reaction}
              </span>
            )}
          </div>
          <span className="text-xs text-gray-400 mt-1">{time}</span>
        </div>
      )}
    </div>
  );
};

interface BlankChatPageProps {
  className?: string;
}

const BlankChatPage: React.FC<BlankChatPageProps> = ({ className }) => {
  return (
    <div
      className={`h-full flex flex-col items-center justify-center sm:w-1/2 lg:w-3/4 ${className}`}
    >
      <h1 className="text-xl font-semibold flex items-center justify-center h-full">
        Select a chat to start messaging
      </h1>
    </div>
  );
};

interface UserProfileProps {
  className?: string;
  chat?: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ className, chat }) => {
  return (
    <div
      className={`border-l border-gray-200 h-full px-4 overflow-y-auto ${className}`}
      style={{ scrollbarWidth: "none" }}
    >
      <div className="h-[250px] flex flex-col items-center justify-center">
        <div className="size-32 min-w-32 rounded-full relative shadow-md">
          {chat?.avatar && (
            <Image
              src={chat.avatar}
              alt="User Avatar"
              width={1000}
              height={1000}
              className="rounded-full"
            />
          )}
          {chat?.isActive && (
            <div className="size-5 rounded-full bg-green-500 border-[3px] border-white absolute right-3 bottom-1"></div>
          )}
        </div>
        <h5 className="text-xl font-semibold mt-1">{chat?.name}</h5>
        <div></div>
      </div>
      <div className="border-t border-gray-200 py-4 w-full">
        <div className="flex items-center justify-between mb-2">
          <h6 className="text-lg font-semibold">Shared Files</h6>{" "}
          <span className="text-xs font-medium text-gray-400 cursor-not-allowed">
            See All
          </span>
        </div>
        <div className="w-full">
          <p className="text-sm text-gray-400">No files shared yet</p>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 w-full">
        <div className="flex items-center justify-between mb-2">
          <h6 className="text-lg font-semibold">Shared Links</h6>{" "}
          <span className="text-xs font-medium text-gray-400 cursor-not-allowed">
            See All
          </span>
        </div>
        <div className="w-full">
          <p className="text-sm text-gray-400">No links shared yet</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
      <h1 className="text-2xl font-semibold">NodeTalk</h1>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="h-12 flex items-center justify-center border-t border-gray-200 text-gray-500 text-sm">
      © {new Date().getFullYear()} NodeTalk. All rights reserved.
    </div>
  );
};

const Search = () => (
  <svg
    fill="#000000"
    height="16"
    width="16"
    viewBox="0 0 488.4 488.4"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <g>
        <path
          d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
        s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
        S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
        S381.9,104.65,381.9,203.25z"
        />
      </g>
    </g>
  </svg>
);

const Send = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 14L12.2728 19.3032C12.5856 20.0331 13.5586 20.1103 13.9486 19.4185C14.7183 18.0535 15.8591 15.8522 17 13C19 8 20 4 20 4C20 4 16 5 11 7C8.14784 8.14086 5.94647 9.28173 4.58149 10.0514C3.88975 10.4414 3.96687 11.4144 4.69678 11.7272L10 14Z"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#FFFFFF"
    />
  </svg>
);
