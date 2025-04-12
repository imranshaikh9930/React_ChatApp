import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ChatUi from './Components/ChatUi'
import ChatHeader from './Components/ChatHeader'
import ChatInput from './Components/ChatInput'
import ChatMessages from './Components/ChatMessages'

function App() {
  const [messages, setMessages] = useState(() => {
    // Load from localStorage on first render
    const stored = localStorage.getItem("messages");
    return stored ? JSON.parse(stored) : [];
  });
  const [input, setInput] = useState("");
  const [isTyping,setIsTyping] = useState(false);
  const messageEndRef = useRef(null);





    useEffect(() => {
      localStorage.setItem('messages', JSON.stringify(messages));
      scrollToBottom();
    }, [messages]);
  
    const scrollToBottom = () => {
      messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(()=>{
      const lastMsg = messages[messages.length - 1];

      if(lastMsg?.sender === "user"){
        setIsTyping(true);
        

       const timeout =  setTimeout(() => {
        const botReply = generateBotReply(lastMsg.text);
          const botMsg = {
            text: botReply,
            sender: 'bot',
            time: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
              }),
              
          };
          setMessages((prev) => [...prev, botMsg]);
          setIsTyping(false);
        }, 1000);

        return ()=> clearTimeout(timeout);
      }
    },[messages])
  const handleSendMessage = () => {

    const lastMsg = messages[messages.length - 1];

    if (lastMsg?.sender === "user") {
      setIsTyping(true);
    }
  
    if (!input.trim()) return;

    const newMessage = {
      text: input,
      sender: 'user',
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }),
      
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');

   
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  const generateBotReply = (userMessage) => {
    const msg = userMessage.toLowerCase();
  
    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hey there! 👋 How can I help you today?";
    } else if (msg.includes("how are you")) {
      return "I'm just code, but I'm running great! 😄";
    } else if (msg.includes("your name")) {
      return "I'm ChatBot, your virtual buddy 🤖";
    } else if (msg.includes("help")) {
      return "Sure! Ask me anything, I'm here to help.";
    } else if (msg.includes("bye")) {
      return "Goodbye! Have a great day ahead!";
    } else {
      return "I'm not sure how to respond to that, but I'm learning every day! 😊";
    }
  };
  
  return (
    <>
     
     <div className="flex flex-col h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 px-4 py-6 sm:px-6 md:px-10 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto rounded-xl shadow-2xl border border-white/30 backdrop-blur-md">
      <ChatHeader />
      <ChatMessages messages={messages} messageEndRef={messageEndRef} isTyping={isTyping} />
      <ChatInput
        input={input}
        setInput={setInput}
        handleKeyDown={handleKeyDown}
        handleSendMessage={handleSendMessage}
      />
    </div>
    </>
  )
}

export default App
