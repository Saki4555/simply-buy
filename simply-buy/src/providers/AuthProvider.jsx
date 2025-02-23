import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from 'axios';



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        })
    }


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            // console.log('logged user', loggedUser)
            setUser(loggedUser);
            // setLoading(false);

            if(loggedUser){
                axios.post(`${import.meta.env.VITE_BASE_URL}/authentication`,{
                    email: loggedUser.email
                }).then(data => {
                    if(data.data){
                        localStorage.setItem('access-token', data?.data?.token);
                        setLoading(false);
                    }
                   
                })
            }
            else{
                localStorage.removeItem('access-token')
                setLoading(false);
            }
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        updateUserProfile,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;