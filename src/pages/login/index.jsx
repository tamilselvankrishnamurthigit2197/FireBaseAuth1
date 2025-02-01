import { useContext } from "react";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";
import CommonForm from "../../components/common-form";
import { loginFormControls } from "../../config";

function LoginPage() {
    const {
        setLoading,
        loginFormData,
        setLoginFormData,
        loginWithFireBase
    } = useContext(AuthContext);

    const navigate = useNavigate();

    function handleLoginOnSubmit (event){
        event.preventDefault();

        loginWithFireBase().then((result)=>{
            console.log(result, "result checking 1234");

            if(result){
                setLoading(false);
                navigate('/profile');
            }
            
        })
    }
    return(
        <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
            <div className="px-6 py-5">
                <h1>Welcome Back</h1>
                <p>Login Page</p>
                <CommonForm 
                formControls={loginFormControls}
                formData={loginFormData}
                setFormData={setLoginFormData}
                onSubmit={handleLoginOnSubmit} /> 

            </div>
        </div>
    )
}
export default LoginPage