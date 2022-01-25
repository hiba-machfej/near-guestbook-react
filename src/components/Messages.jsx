import { useEffect, useState } from 'react';

const Messages = ({ getMessages }) => {
  const [messages, setMessages] = useState();

  useEffect(() => {
    const fetchMessages = async () => {
      const result = await getMessages();
      setMessages(result);
    };
    fetchMessages();
  });

  return (
    <>
      <h2 className="w-full text-2xl m-4 text-center mt-20">GuestBook Messages</h2>

      <div className="flex flex-wrap">
        {messages &&
          messages.map((message, index) => {
            return (
              <div key={index} className="bg-gray-100 m-3 p-4 w-64 rounded-xl flex flex-col justify-between">
                <div className="flex justify-between">
                  <h4 className="mt-2 font-bold">{message.text}</h4>

                  {message.premium && <span className="text-xs">Premium</span>}
                </div>
                <p className="text-sm mt-2">Sender: {message.sender}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Messages;
