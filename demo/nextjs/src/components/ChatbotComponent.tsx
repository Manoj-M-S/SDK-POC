'use client'; 
import { useEffect, useRef } from 'react';
import ChatBotSDK from 'chatbot-sdk-demo';

interface ChatbotProps {
  apiKey: string;
}

const ChatbotComponent = ({ apiKey}: ChatbotProps) => {
  const chatbotInstanceRef = useRef<ChatBotSDK | null>(null);

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