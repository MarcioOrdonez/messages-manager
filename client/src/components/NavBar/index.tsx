import "./NavBar.css";
import type { FC } from "react";




const NavBar: FC = () => (
    <div className="nav-bar">
        <div className="nav-bar__buttons">
            <div className="nav-bar__manage-page" onClick={()=>{}}></div>
            <div className="nav-bar__view-page" onClick={()=>{}}></div>
        </div>
    </div>
)


export default NavBar;
