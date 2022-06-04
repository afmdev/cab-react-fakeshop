import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../config'
import { AuthContext } from '../context/authContext';
import ChatList from './ChatList';

function Chat() {
	// console.log("db", db)

	const [messages, setMessages] = useState(null)
	const [chatMsg, setChatMsg] = useState("")
	const { user } = useContext(AuthContext)
	console.log("hola q ase", user)

	const getMessages = () => {
		const q = query(collection(db, "Chat"), orderBy("date", "asc"));
		// const q = query(collection(db, "cities"), where("state", "==", "CA"));
		onSnapshot(q, (querySnapshot) => {
			const myMessages = [];
			querySnapshot.forEach((doc) => {
				myMessages.push(doc.data());
				console.log("MyMessages", myMessages)
			});
			console.log(myMessages);
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

	const handleMessageChange = (e) => {
		console.log(e.target.value)
		setChatMsg(e.target.value)
	}

	const handleChatMessageSubmit = async () => {
		const messageObj = {
			text: chatMsg,
			author: user.email,
			date: new Date() //crea la fecha actual
		}
		try {
			const docRef = await addDoc(collection(db, "Chat"), messageObj);
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}

	return (
		<div>
			<h1>Chat</h1>
			<ol className="messages">
				<ChatList />
			</ol>
			<input type="text" value={chatMsg} onChange={handleMessageChange} />
			<button onClick={handleChatMessageSubmit}>Send</button>
		</div>
	);
}

export default Chat