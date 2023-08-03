import React from "react";
import "./Menu.css"
import {Outlet, Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
// import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineSetting} from "react-icons/ai";
import {RiDashboardLine} from "react-icons/ri";
import {FiLock} from "react-icons/fi";
import {GoPeople} from "react-icons/go";
import {FiFolderMinus} from "react-icons/fi";
import {BsChatDots} from "react-icons/bs";


const menubar=[
    {
        icon:RiDashboardLine,
        title: "Dashboard",
        url:"/"
    },
    {
        icon:FiLock,
        title: "Orders",
        url:"/orders"
    },
    {
        icon:GoPeople,
        title: "Customers",
        url:"/customers"
    },
    {
        icon:FiFolderMinus,
        title: "Inventory",
        url:"/inventory"
    },
    {
        icon:BsChatDots,
        title: "Conversation",
        url:"/conversation"
    },
    {
        icon:AiOutlineSetting,
        title: "Settings",
        url:"/settings"
    }
]

function Menu(){

    const location = useLocation();
    const {pathname} = location;
    const splitLocation = pathname.split("");
    return(
        <nav>
            <div style={{fontWeight:"bolder"}} >
                Metrix
            </div>
            <div>
                {menubar.map((user)=>(
                    <nav>
                        <Link className={splitLocation[1] === user.url ? "active" : ""}  key={user.title} to={user.url}>
                            <user.icon />
                            <span>
                                {user.title}
                            </span>
                        </Link>
                    </nav>
                ))}
                <Outlet/>
            </div>
        </nav>

    );
}

export default Menu;
