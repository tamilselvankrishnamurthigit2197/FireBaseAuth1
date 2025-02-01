import { useContext } from "react";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import auth from "../../fireBaseConfig";
import CommonForm from "../../components/common-form";
import { registerFormControls } from "../../config";

function RegisterPage() {
    const {
        setLoading,
        registerFormData,
        setRegisterFormData,
        registerWithFirebase
    } = useContext(AuthContext)

    const navigate = useNavigate();

    console.log(registerFormData);

    function handleRegisterFormSubmit(event) {
        /* call it so () is must after preventDefault */
        event.preventDefault();

        registerWithFirebase().then((result)=>{
            updateProfile(result.user, {
                displayName: registerFormData.name,
            }).then(()=>{
                console.log(auth.currentUser.displayName, "auth.currentUser.displayName");
                if(auth.currentUser.displayName){
                    setLoading(false);
                    navigate("/profile");
                }
            }).catch((error)=> console.log(error))
        })
    }
    return(
        <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
            <div className="px-6 py-5">
                <h2>Welcome Back!</h2>
                <p>Register Page</p>

                <CommonForm 
                    formControls={registerFormControls}
                    formData={registerFormData}
                    setFormData={setRegisterFormData}
                    onSubmit={handleRegisterFormSubmit}
                    buttonText={"save"} />
            </div>
        </div>
    )
    
}
export default RegisterPage