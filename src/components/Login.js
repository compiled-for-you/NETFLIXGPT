import Header from "./Header";
import { BG_IMG } from "../constants/Constant";

const Login = () => {
    return (
        <div>
            <Header/>
            <img src={BG_IMG} alt="bg_img" className="bg-gradient-to-r from-black"/>
            <input type="text"></input>
            <button className="p-10 m-10 rounded-3xl bg-blue-600">LOGIN</button>
        </div>
    )
}

export default Login;