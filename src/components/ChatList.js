import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { PersonCircle } from 'react-bootstrap-icons';
import { db } from '../config'
import { AuthContext } from '../context/authContext';

function ChatList() {
	// console.log("db", db)

	const [messages, setMessages] = useState(null)
	const { user } = useContext(AuthContext)

	const getMessages = () => {
		const q = query(collection(db, "Chat"), orderBy("date", "asc"));
		// const q = query(collection(db, "cities"), where("state", "==", "CA"));
		onSnapshot(q, (querySnapshot) => {
			const myMessages = [];
			querySnapshot.forEach((doc) => {
				myMessages.push(doc.data());
			});
			setMessages(myMessages)
		});
	}

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
		getMessages()
	}, [])

	const messageDate = (time) => {
		return new Date(time * 1000).toLocaleTimeString()
	}

	return (
		<div>
			{messages &&
				messages.map((message, index) => {
					return (
						<li className={message.author === user.email ? "mine" : ""} key={index}>
							<div className="message">
								<div className="text"><span><PersonCircle size={20} className="chat-icon" />{message.text}</span></div>
								<div className="author"><span>{message.author}{' | '}{messageDate(message.date.seconds)}</span></div>
							</div>
						</li>
					);
				})}
		</div>
	);
}

export default ChatList