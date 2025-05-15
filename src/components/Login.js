import Header from "./Header";
import { BG_IMG } from "../constants/Constant";
import { useRef, useState } from "react";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const name = useRef(null);
    const phone = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        // Logic to toggle the sign-in form
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        // Logic to handle sign-in or sign-up
        if (isSignInForm) {
            console.log("Signing in...");
            console.log("Email: ", email.current.value);
            console.log("Password: ", password.current.value);
        } else {
            console.log("Signing up...");
            fetch('http://localhost:8081/organizations', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                console.log('Success:', data);
                // Handle successful sign-up
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error
            });
        }
    }

    return (
        <div>
            <Header />
            <div className="flex items-center justify-center min-h-screen relative bg-black">
                <img src={BG_IMG} alt="bg_img" className="absolute w-full h-full object-cover opacity-60" />
                <form className="relative w-full max-w-md p-10 bg-black bg-opacity-75 rounded-md">
                    <h1 className="text-3xl font-bold text-white mb-6">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                    {!isSignInForm && <div className="mb-4">
                        <input
                            ref={name}             
                            type="text"
                            placeholder="Name"
                            className="p-3 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                    </div>}
                    {!isSignInForm && <div className="mb-4">
                        <input
                            ref={phone}
                            type="text"
                            placeholder="Phone Number"
                            className="p-3 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                    </div>}
                    <div className="mb-4">
                        <input
                            ref={email}
                            type="email"
                            placeholder={!isSignInForm ?  "Email" : "Email or phone number"}
                            className="p-3 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            ref={password}
                            type="password"
                            placeholder="Password"
                            className="p-3 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                    </div>
                    <button className="w-full py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition" onClick={handleButtonClick}> 
                        {isSignInForm ? 'Sign In' : 'Sign Up'}
                    </button>
                    <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
                        <div>
                            <input type="checkbox" id="rememberMe" className="mr-2" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <a href="#" className="hover:underline">Need help?</a>
                    </div>
                    {isSignInForm ? 
                        <div className="mt-8 text-gray-400 text-sm">
                            New to Netflix? <a href="#" className="text-white hover:underline" onClick={toggleSignInForm}>Sign up now</a>.
                        </div> :
                        <div className="mt-8 text-gray-400 text-sm">
                            Already have an account? <a href="#" className="text-white hover:underline" onClick={toggleSignInForm}>Sign In</a>.
                        </div>
                    }
                    <p className="mt-4 text-xs text-gray-400">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className="text-blue-500 hover:underline">Learn more</a>.
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;