import { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from '../config';
import { db } from '../config';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import OpenModal from '../components/OpenModal';


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
	}


	const userUpdate = (name) => {
		updateProfile(user, {
			displayName: `${name}`, photoURL: "https://www.heisenberg.shop/media/logo/websites/4/logo-heisenberg.png"
		}).then(() => {
			<OpenModal />
		}).catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message
		});

	}

	const removeUser = (user) => {
		deleteUser(user).then(() => {
			alert("borra o no borra?")
			// User deleted.
		}).catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message
		});
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




	return <AuthContext.Provider value={{ user, setUser, register, login, logout, userUpdate, removeUser }}>
		{props.children}
	</AuthContext.Provider>
}
