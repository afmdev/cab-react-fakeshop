import { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../config';
import { db } from '../config';
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
			redirectTo("/my-account")
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
				redirectTo("/my-account")
			})
			.catch((error) => {
				setUser(null)
				const errorCode = error.code
				const errorMessage = error.message
			});
	}

	const checkIfUserIsLogged = () => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid;
				setUser(user)
				redirectTo("/")
			} else {
				setUser(null)
			}
		});
	}

	useEffect(() => {
		checkIfUserIsLogged()
	}, [])

	const logout = () => {
		signOut(auth).then(() => {
			setUser(null)
		}).catch((error) => {
			console.log(error)
		});
	}




	return <AuthContext.Provider value={{ user, setUser, register, login, logout }}>
		{props.children}
	</AuthContext.Provider>
}

