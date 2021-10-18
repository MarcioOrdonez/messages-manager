import "./styles.css";
import { Link } from "react-router-dom";
import type { FC } from "react";




const NavBar: FC = () => (
    <div className="nav-bar">
        <div className="nav-bar__buttons">
        <div className="nav-bar__manage-page"><Link to="/">Gerenciar mensagens</Link></div>
        <div className="nav-bar__view-page"><Link to="/view">Receber mensagens</Link></div>
        </div>
    </div>
)


export default NavBar;
