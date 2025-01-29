import React, { useEffect, useRef } from 'react';
import ChatBotSDK from 'chatbot-sdk-demo';
const ChatbotComponent = ({ apiKey}) => {
  const chatbotInstanceRef = useRef(null);

  useEffect(() => {
    // Create instance
    chatbotInstanceRef.current = new ChatBotSDK({
      apiKey,
    });

    // Initialize
    chatbotInstanceRef.current.initialize();

  }, [apiKey]);

  return <div id="chatbot-container" />;
};

export default ChatbotComponent;