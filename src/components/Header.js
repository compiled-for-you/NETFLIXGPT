import { LOGO_IMG } from "../constants/Constant";

const Header = () => {
    return (
    <div className="bg-transparent flex absolute">
        <img src={LOGO_IMG} alt="logoimage" className="px-1 h-20 bg-gradient-to-b from-black z-10" />
    </div>
    )
}

export default Header;