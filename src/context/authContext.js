import { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from '../config';
import { useNavigate } from 'react-router-dom';
import OpenModal from '../components/OpenModal';


export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
	const [user, setUser] = useState(null)
	console.log('user authcontext', user)
	const redirectTo = useNavigate();
	const [updatedUserName, setUpdatedUserName] = useState("")
	const [updatedUserProfileImage, setUpdatedUserProfileImage] = useState("")

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
			alert(error.message);
		}
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
				alert(error.message);
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

	const logout = () => {
		signOut(auth).then(() => {
			setUser(null)
		}).catch((error) => {
			console.log(error)
		});
	}

	const userUpdate = (name, image) => {
		console.log('user updateFunction', user)
		updateProfile(user, {
			displayName: `${name}`, photoURL: `${image}`

		}).then(() => {
			setUpdatedUserName(name)
			setUpdatedUserProfileImage(image)
		}).catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message
		});

	}

	// const deleteYourUser = () => {
	// 	console.log("User deleted first clg???")
	// 	user.delete().then(() => {
	// 		console.log("User deleted???")
	// 	}).catch((error) => {
	// 		const errorCode = error.code
	// 		const errorMessage = error.message
	// 	});
	// }

	const deleteYourUser = async () => {
		try {
			const borratePohFavoh = await user.delete()
		}
		catch (error) {
			setUser(null)
			const errorCode = error.code
			const errorMessage = error.message
		}
	}

	useEffect(() => {
		checkIfUserIsLogged()
	}, [])

	return <AuthContext.Provider value={{ user, setUser, register, login, logout, userUpdate, updatedUserName, updatedUserProfileImage, deleteYourUser }}>
		{props.children}
	</AuthContext.Provider>
}
