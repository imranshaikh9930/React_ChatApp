const ChatInput = ({ input, setInput, handleKeyDown, handleSendMessage }) => {
    return (
      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center sm:space-x-4 gap-2">
        <input
          type="text"
          className="w-full sm:flex-1 border border-white/30 bg-white/20 backdrop-blur-md text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-600 transition"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSendMessage}
          className="w-full sm:w-auto bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-6 py-3 rounded-xl transition duration-200 transform hover:scale-105 shadow-md"
        >
          🚀 Send
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("messages");
            window.location.reload();
          }}
          className="w-full sm:w-auto bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white px-6 py-3 rounded-xl transition duration-200 transform hover:scale-105 shadow-md"
        >
          🗑️ Clear
        </button>
      </div>
    );
  };
  
  export default ChatInput;
  