import React, { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import axios from "axios";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!enteredName || !enteredEmail || !enteredMessage) {
      alert("Please fill all the required fields.");
      return;
    }

    const data = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };

    try {
      setLoading(true);
      await axios.post("https://a-fnconcepts-server.onrender.com/api/message", data);
      alert("Message Sent Successfully ✅");
      setEnteredName("");
      setEnteredEmail("");
      setEnteredMessage("");
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Form Box */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-green-500 text-white rounded-2xl shadow-lg p-6 z-50">
          <p className="text-center mb-4 font-medium">
            Please fill out the form below and we will get back to you as soon as
            possible.
          </p>

          <form
            onSubmit={submitHandler}
            className="bg-white text-black rounded-xl p-4 flex flex-col gap-3"
          >
            <input
              type="text"
              placeholder="* Name"
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="* Email"
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none"
            />
            <textarea
              placeholder="* Message"
              rows="3"
              value={enteredMessage}
              onChange={(e) => setEnteredMessage(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center gap-2 ${
                loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
              } text-white rounded-lg py-2 mt-2 transition`}
            >
              {loading ? "Sending..." : <><Send size={18} /> Submit</>}
            </button>
          </form>

          {/* Optional Bottom Bar */}
          <div className="flex justify-between items-center mt-3 bg-white text-black rounded-b-2xl px-6 py-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v18m9-9H3"
                />
              </svg>
            </div>
            <div className="text-gray-600">
              <MessageCircle size={20} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;





// import React, { useState } from "react";
// import { MessageCircle, Send } from "lucide-react";

// const ChatWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       {/* Floating Chat Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition"
//       >
//         <MessageCircle size={28} />
//       </button>

//       {/* Chat Form Box */}
//       {isOpen && (
//         <div className="fixed bottom-24 right-6 w-80 bg-green-500 text-white rounded-2xl shadow-lg p-6 z-50">
//           <p className="text-center mb-4 font-medium">
//             Please fill out the form below and we will get back to you as soon as
//             possible.
//           </p>

//           <form className="bg-white text-black rounded-xl p-4 flex flex-col gap-3">
//             <input
//               type="text"
//               placeholder="* Name"
//               className="border border-gray-300 rounded-lg p-2 focus:outline-none"
//             />
//             <input
//               type="email"
//               placeholder="* Email"
//               className="border border-gray-300 rounded-lg p-2 focus:outline-none"
//             />
//             <textarea
//               placeholder="* Message"
//               rows="3"
//               className="border border-gray-300 rounded-lg p-2 focus:outline-none resize-none"
//             ></textarea>

//             <button
//               type="submit"
//               className="flex items-center justify-center gap-2 bg-green-500 text-white rounded-lg py-2 mt-2 hover:bg-green-600 transition"
//             >
//               <Send size={18} />
//               Submit
//             </button>
//           </form>

//           {/* Optional Bottom Bar */}
//           <div className="flex justify-between items-center mt-3 bg-white text-black rounded-b-2xl px-6 py-2">
//             <div className="flex items-center justify-center w-8 h-8 rounded-full text-green-500">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 stroke="currentColor"
//                 className="w-5 h-5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 3v18m9-9H3"
//                 />
//               </svg>
//             </div>
//             <div className="text-gray-600">
//               <MessageCircle size={20} />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWidget;
