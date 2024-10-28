import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from "jwt-decode"
import { useNavigate } from 'react-router-dom';
function Login(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/register'); 
    };

    return (
        <>
            <div className="padding"></div>
            <div>
                <GoogleLogin onSuccess={(credentialResponse) => {
                    console.log("Success", credentialResponse)
                    console.log("JWT", jwtDecode(credentialResponse.credential))
                }} onError={() => console.log("Login failed")}/>
            </div>
            <div>
                <h2>OR</h2>
                <form>
                    enter Email
                    <br/>
                    enter password
                    <br/>
                    submit
                </form>
                <button onClick={handleClick}>Don't have an account</button>
            </div>
        </>
        
    )



} 

export default Login