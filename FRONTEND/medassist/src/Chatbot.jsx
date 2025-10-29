import React, { useState } from "react";
import "./assets/css/chat.css"; // Import CSS

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hello! I’m MediBot. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

    const openChat = () => setIsOpen(true);
    const closeChat = () => setIsOpen(false);
  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "🤖 MediBot: Thanks for your question! I’ll assist you." }
      ]);
    }, 1000);
  };
  // read the chatbott button from navbar and open the chatbot
  React.useEffect(() => {
    const btn = document.querySelector("#btn-bot");
    if (btn) btn.addEventListener("click", openChat);
    return () => btn && btn.removeEventListener("click", openChat);
  }, []);

  return (
    <div>
      
      

      {/* Chatbot Popup */}
      {isOpen && (
        <div className="chatbot">
          {/* Header */}
          <div className="chatbot-header">
            <h3>MediBot</h3>
            <button className="close-btn" onClick={closeChat}>✖</button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <p key={i} className={msg.sender === "user" ? "user-msg" : "bot-msg"}>
                {msg.text}
              </p>
            ))}
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
