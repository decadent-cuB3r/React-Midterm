import {Link} from "react-router-dom"
import logo from "../images/logo.png"

export default function header(){
    return(
        <div className="header">
            <header className="header-wrap">
                <div className="header-logo">
                    <Link to ="/">
                        <img className="logo-img"src={logo}></img>
                    </Link>
                </div>
                <div className="header-nav">
                    <Link to className="header-nav-text">關於五吉</Link>
                    <Link to className="header-nav-text">產品資訊</Link>
                    <Link to className="header-nav-text">最新消息</Link>
                    <Link to className="header-nav-text">客戶須知</Link>
                    <Link to className="header-nav-text">聯絡我們</Link>
                </div>
            </header>
        </div>
    );
}