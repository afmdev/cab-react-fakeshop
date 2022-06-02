import { createContext, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config';
import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
	const [user, setUser] = useState(null)
	const redirectTo = useNavigate();

	const register = async (email, password) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			)
			const user = userCredential.user;
			setUser(user)
			redirectTo("/")
			console.log("userCredential", userCredential)
		}
		catch (error) {
			console.log(error)
			setUser(null)
			const errorCode = error.code
			const errorMessage = error.message
		}
		console.log("email password", email, password)
	}

	const login = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				setUser(user)
			})
			.catch((error) => {
				setUser(null)
				const errorCode = error.code
				const errorMessage = error.message
			});
	}

	return <AuthContext.Provider value={{ user, setUser, register, login }}>
		{props.children}
	</AuthContext.Provider>
}

