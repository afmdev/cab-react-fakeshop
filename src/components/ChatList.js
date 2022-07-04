import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { PersonCircle } from "react-bootstrap-icons";
import { db } from "../config";
import { AuthContext } from "../context/authContext";

function ChatList() {
  // console.log("db", db)

  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState(null);

  const [displayName, setDisplayName] = useState(user.displayName);
  const [photoURL, setPhotoURL] = useState(user.photoURL);

  const getMessages = () => {
    const q = query(collection(db, "Chat"), orderBy("date", "asc"));
    // const q = query(collection(db, "cities"), where("state", "==", "CA"));
    onSnapshot(q, (querySnapshot) => {
      const myMessages = [];
      querySnapshot.forEach((doc) => {
        myMessages.push(doc.data());
      });
      setMessages(myMessages);
    });
  };

  //#region
  // const getMessages = async () => {
  // 	try {
  // 		const querySnapshot = await getDocs(collection(db, "Chat"));
  // 		const myMessages = []
  // 		querySnapshot.forEach((doc) => {
  // 			// console.log(doc)
  // 			// console.log(`${doc.id} => ${doc.data()}`);
  // 			myMessages.push(doc.data())
  // 		});
  // 		setMessages(myMessages)
  // 		console.log(myMessages)
  // 	} catch (error) {
  // 		console.log("error", error)

  // 	}
  // }
  //#endregion

  useEffect(() => {
    getMessages();
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const messageDate = (time) => {
    return new Date(time * 1000).toLocaleTimeString();
  };

  return (
    <div>
      {messages &&
        messages.map((message, index) => {
          return (
            <li
              className={message.author === user.email ? "mine" : ""}
              key={index}
            >
              <div className="message">
                <div className="text">
                  <span>
                    {message.author === user.email ? (
                      <img
                        src={photoURL}
                        className="chat-icon"
                        alt={user.email}
                        width="20px"
                        heigth="20px"
                      />
                    ) : (
                      <PersonCircle size={20} className="chat-icon" />
                    )}

                    {/* <PersonCircle size={20} className="chat-icon" /> */}

                    {/* {photoURL === null ? <PersonCircle size={20} className="chat-icon m-1" /> : <img src={photoURL} className="chat-icon" alt={user.email} width="20px" heigth="20px" />} */}

                    {message.text}
                  </span>
                </div>
                <div className="author">
                  <span>
                    {message.author}
                    {" | "}
                    {messageDate(message.date.seconds)}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
    </div>
  );
}

export default ChatList;
