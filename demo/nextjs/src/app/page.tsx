'use client';

import ChatbotComponent from '../components/ChatbotComponent';

export default function Home() {
  return (
    <main>
      <h1>My Next.js App</h1>
      <ChatbotComponent 
        apiKey="your-api-key"
      />
    </main>
  );
}