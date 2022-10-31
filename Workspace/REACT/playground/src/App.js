import React from "react";

export default function App() {
  const [messages, setMessages] = React.useState(["d", "s"]);
  /**
   * Challenge:
   * - If there are no unread messages, display "You're all caught up!"
   * - If there are > 0 unread messages, display "u have You have <n> unread
   *   message(s)"
   *      - If there's exactly 1 unread message, it should read "message"
   *        (singular)
   */
  return (
    <div>
      {messages.length > 0 ? (
        <h1>
          "u have {messages.length} unread{" "}
          {messages.length === 1 ? "messege" : "messages"}"
        </h1>
      ) : (
        <h1>"Youre all caught up!"</h1>
      )}
    </div>
  );
}
