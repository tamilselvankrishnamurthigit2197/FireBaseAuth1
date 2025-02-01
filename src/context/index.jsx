import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import auth from "../fireBaseConfig";

export const AuthContext = createContext(null)

export default function AuthState({children}) {
    
    /* resiter and login form elements initialize */

    const [registerFormData, setRegisterFormData] = useState({
        name : "",
        email: "",
        password: "",
    })

    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
    })

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate();

    /* with authuntication for registerform : creating an account */
    function registerWithFirebase() {
        setLoading(true);
        const {email, password} = registerFormData;
        return createUserWithEmailAndPassword(auth, email, password);
    }

    /* with authentication: signIn process - login */
    function loginWithFireBase() {
        setLoading(true);
        const {email, password} = loginFormData;
        return signInWithEmailAndPassword(auth, email, password);
    }

    /* logout once it went to profile page which has display name, email of current user and a logout type button */

    function handleLogout() {
        return signOut(auth);
    }

    useEffect(()=>{
        /* unsubscribe  */
        const checkAuthState = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser, "currentUser is signedIn");
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            checkAuthState();
        }
    },[])

    useEffect(()=>{
        if(user && !loading) navigate("/profile")
    },[user, loading])

if(loading) return <h1>Loading ! Please Wait !</h1>

    return(
        <AuthContext.Provider value={{
            registerFormData,
            setRegisterFormData,
            loading,
            setLoading,
            user,
            setUser,
            loginFormData,
            setLoginFormData,
            registerWithFirebase,
            loginWithFireBase,
            handleLogout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}