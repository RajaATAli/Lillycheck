import { useEffect } from 'react';
import Head from 'next/head';
import Dashboard from '@/app/dashboard'; // Adjust the import path based on your project structure

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/0.1.0-beta.4/libs/oversea/index.js';
    script.async = true;
    script.onload = () => {
      new CozeWebSDK.WebChatClient({
        config: {
          bot_id: process.env.NEXT_PUBLIC_BOT_ID,
        },
        componentProps: {
          title: 'Lilly Intelligence',
        },
      });
    };
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Dashboard />
    </>
  );
}



