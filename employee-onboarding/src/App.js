import React, { useEffect } from 'react';
import './App.css';
import './index.css';
import TaskTable from './TaskTable'; // Import the TaskTable component
import loadScript from './utils/loadScript'; 


function App() {
  useEffect(() => {
    // Load the Coze SDK script
    loadScript("https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/0.1.0-beta.4/libs/oversea/index.js", "coze-sdk");

    // Setup callback to initialize SDK after script is loaded
    const initCozeSDK = () => {
      if (window.CozeWebSDK) {
        new window.CozeWebSDK.WebChatClient({
          config: {
            bot_id: '7389706060237750277',
          },
          componentProps: {
            title: 'LillyCheck',
          },
        });
      }
    };

    // Check if the script is loaded before initialization
    window.addEventListener('load', initCozeSDK);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('load', initCozeSDK);
    };
  }, []);

  return (
    <div className="bg-red-500 min-h-screen flex items-center justify-center">
      <div className="p-10 bg-white shadow-xl rounded-lg">
        <TaskTable className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" /> {/* Tailwind classes added */}
      </div>
    </div>
  );
}

export default App;


