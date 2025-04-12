import { motion } from "framer-motion";

const MessageBubble = ({ msg, index }) => {
  const isUser = msg.sender === "user";

  return (
    <motion.div
      className={`mb-4 flex ${isUser ? "justify-end" : "justify-start"}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div
        className={`relative max-w-[80%] sm:max-w-sm px-4 py-3 rounded-2xl shadow-lg text-sm flex flex-col bg-white/40 backdrop-blur-md border ${
          isUser
            ? "bg-blue-500/70 text-shadow-amber-100 rounded-br-none"
            : "bg-gray-200/80 text-gray-800 rounded-bl-none"
        }`}
      >
        <div className="flex items-center mb-1">
          <div className="w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center text-xs font-bold text-white mr-2 shadow-md">
            {msg.sender[0].toUpperCase()}
          </div>
          <span className="text-xs font-semibold">
            {isUser ? "You" : msg.sender}
          </span>
        </div>
        <p className="break-words leading-relaxed">{msg.text}</p>
        <span className="text-[10px] text-right text-gray-500 mt-2">
          {msg.time}
        </span>
      </div>
    </motion.div>
  );
};

export default MessageBubble;
