import ReactMarkdown from "react-markdown";

const MessageList = ({conversation}) => {

  if (!conversation) return (
    <div className="text-center text-gray-500">
      Start a conversation by typing a new message
    </div>
  );

  return (
    <>
      {conversation && conversation.messages.map((message) => (
        <div 
          key={message._id}
          className={`mb-4 ${
            message.role === "assistant" 
              ? "bg-white" 
              : "bg-blue-50"
          } rounded-lg p-4 shadow-sm`}
        >
          <p className="text-sm font-medium text-gray-500 mb-2">
            {message.role === "assistant" ? "AI Assistant" : "You"}
          </p>
          <ReactMarkdown className="text-gray-800 whitespace-pre-wrap">{message.content}</ReactMarkdown>
        </div>
      ))}
    </>
  )
}

export default MessageList;