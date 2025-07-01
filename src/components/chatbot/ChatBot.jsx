import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoRefreshOutline } from "react-icons/io5";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const chatEndRef = useRef(null);

  const botOptions = [
    { label: "📞 Make a Call", action: "call" },
    { label: "💬 Chat via WhatsApp", action: "whatsapp" },
    { label: "📋 Contact Details", action: "contact" },
    { label: "🚑 Emergency", action: "emergency" },
  ];

  // Auto-scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  // Greet when chat opens
  useEffect(() => {
    if (isOpen && chatHistory.length === 0) {
      setTimeout(() => showBotGreeting(), 200);
    }
  }, [isOpen]);

  const showBotGreeting = () => {
    setChatHistory([
      {
        type: "bot",
        text: "👋 Hello! I'm your assistant from Takshashila Medical College & Hospital.\nHow can I help you today?",
      },
      { type: "bot-options", options: botOptions },
    ]);
  };

  const handleBotAction = (action) => {
    const userText = botOptions.find((opt) => opt.action === action)?.label;
    setChatHistory((prev) => [...prev, { type: "user", text: userText }]);

    if (action === "call") {
      setTimeout(() => window.open("tel:+919876543210"), 300);
    } else if (action === "whatsapp") {
      setTimeout(() => {
        window.open(
          "https://wa.me/919876543210?text=Hi%20I%20need%20assistance%20from%20Takshashila%20Medical%20College",
          "_blank"
        );
      }, 300);
    } else if (action === "contact") {
      setChatHistory((prev) => [
        ...prev,
        {
          type: "bot",
          text:
            "🏥 Address:\nTakshashila Medical College & Hospital\n📧 Email: info@takshashilamedical.com",
        },
      ]);
    } else if (action === "emergency") {
      setChatHistory((prev) => [
        ...prev,
        {
          type: "bot",
          text: "🚑 Emergency services available 24x7 at +91 1122334455",
        },
      ]);
    }
  };

  const restartBot = () => {
    setChatHistory([]);
    showBotGreeting();
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        <IoChatbubbleEllipsesOutline/>
      </button>

      <div className={`chatbot-window ${isOpen ? "open" : ""}`}>
        <div className="chatbot-header">
          Takshashila Bot
          <button className="refresh-btn" onClick={restartBot} title="Restart Chat"><IoRefreshOutline/></button>
        </div>

        <div className="chatbot-body">
          {chatHistory.map((msg, idx) =>
            msg.type === "bot-options" ? (
              <div key={idx} className="bot-options-wrapper">
                {msg.options.map((opt, i) => (
                  <div
                    key={i}
                    className="chat-option-bubble"
                    onClick={() => handleBotAction(opt.action)}
                  >
                    {opt.label}
                  </div>
                ))}
              </div>
            ) : (
              <div key={idx} className={`chat-message ${msg.type}`}>
                {msg.text}
              </div>
            )
          )}
          <div ref={chatEndRef} />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
