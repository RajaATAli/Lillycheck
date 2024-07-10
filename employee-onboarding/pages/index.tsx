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
          bot_id: '7389706060237750277',
        },
        componentProps: {
          title: 'LillyCheck',
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



