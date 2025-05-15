import { LOGO_IMG } from "../constants/Constant";

const Header = () => {
    return (
    <div className="bg-transparent flex absolute w-screen bg-gradient-to-b from-black z-10">
        <img src={LOGO_IMG} alt="logoimage" className="px-1 h-20" />
    </div>
    )
}

export default Header;