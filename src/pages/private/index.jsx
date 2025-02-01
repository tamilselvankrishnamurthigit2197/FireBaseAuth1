import { useContext } from "react";
import { AuthContext } from "../../context";
import { Navigate } from "react-router-dom";

function AuthPage({ children }) {
    const {user, loading} = useContext(AuthContext)

    if(loading) return <h2>Loading! Please wait !</h2>
    if (user) return children;

    return <Navigate to={"/login"} />;
}
export default AuthPage