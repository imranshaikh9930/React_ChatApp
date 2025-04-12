import MessageBubble from "./MessageBubble";

const ChatMessages = ({ messages, messageEndRef, isTyping }) => {
  return (
    <div className="flex-1 overflow-y-auto scrollbar-none bg-white/30 backdrop-blur-lg p-2 sm:p-4 rounded-xl shadow-inner max-h-[65vh] border border-white/20 space-y-3 sm:space-y-4">
      {messages.map((msg, i) => (
        <MessageBubble key={i} msg={msg} index={i} />
      ))}

      {isTyping && (
        <div className="mb-2 flex justify-start">
          <div className="flex items-center space-x-1 bg-gray-300 text-gray-800 rounded-2xl px-3 py-2">
            <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" />
          </div>
        </div>
      )}

      <div ref={messageEndRef} />
    </div>
  );
};

export default ChatMessages;
