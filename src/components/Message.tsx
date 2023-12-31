import { MessageAuthor } from "@/types/enums";
import SlowResponse from "./SlowResponse";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import style from "./styles/markdown.module.css";

interface Props {
  message: Partial<Message>;
  loading?: boolean;
  slow?: boolean;
}

export default function Message({ message, loading, slow = false }: Props) {
  return (
    <div
      className={
        " flex flex-row justify-start p-2 space-x-2 rounded-lg w-[inherit] " +
        (message.author == MessageAuthor.user ? "bg-theme-secondary" : "")
      }
    >
      <h1 className="bg-[#454545] text-xl rounded-lg p-1 h-fit">
        {message.author == MessageAuthor.user ? "🧒" : "🤖"}
      </h1>
      <p className="m-auto break-words overflow-hidden break-all">
        {loading ? (
          <span className="animate-pulse">Thinking...</span>
        ) : message.author == MessageAuthor.user ? (
          message.content
        ) : slow ? (
          <SlowResponse speed={8} text={message.content!} />
        ) : (
          <Markdown remarkPlugins={[remarkGfm]} className={style.reactMarkDown}>
            {message.content as string}
          </Markdown>
        )}
      </p>
    </div>
  );
}
