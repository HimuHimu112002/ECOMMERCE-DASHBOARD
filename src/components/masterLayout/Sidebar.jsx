import { Link, NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGauge, faCartShopping} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {

    return(
        <>
            <div className="sidebar_menu text-white pb-[20px]">
                <ul>
                    <li className="text-[17px] border-b border-1 border-[#021933] font-robotoFont hover:bg-[#051f3e] py-[5px] max-xl:px-[10px] " >
                        <NavLink  className={({isActive}) => isActive  ? "flex items-center bg-[#051f3e] px-[20px] " : "flex items-center px-[20px] " }>
                            <FontAwesomeIcon icon={faGauge} />
                            <span className="pl-[12px] py-[8px] w-full block max-lg:text-[14px] max-xl:text-[15px]">Dashboard</span>
                        </NavLink>
                    </li>

                    <li className="text-[17px] border-b border-1 border-[#021933] font-robotoFont hover:bg-[#051f3e] py-[5px] max-xl:px-[10px]" >
                        <NavLink to="/product" className={({isActive}) => isActive  ? "flex items-center bg-[#051f3e] px-[20px] " : "flex items-center px-[20px] " }>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="pl-[12px] py-[8px] w-full block max-lg:text-[14px] max-xl:text-[15px]">All Product</span>
                        </NavLink>
                    </li>

                    <li className="text-[17px] border-b border-1 border-[#021933] font-robotoFont hover:bg-[#051f3e] py-[5px] max-xl:px-[10px]" >
                        <NavLink to="/ProductUpload" className={({isActive}) => isActive  ? "flex items-center bg-[#051f3e] px-[20px] " : "flex items-center px-[20px] " }>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="pl-[12px] py-[8px] w-full block max-lg:text-[14px] max-xl:text-[15px]">Product Upload</span>
                        </NavLink>
                    </li>

                    <li className="text-[17px] border-b border-1 border-[#021933] font-robotoFont hover:bg-[#051f3e] py-[5px] max-xl:px-[10px]" >
                        <NavLink to="/ProductDelete" className={({isActive}) => isActive  ? "flex items-center bg-[#051f3e] px-[20px] " : "flex items-center px-[20px] " }>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="pl-[12px] py-[8px] w-full block max-lg:text-[14px] max-xl:text-[15px]">Product Delete</span>
                        </NavLink>
                    </li>

                    <li className="text-[17px] border-b border-1 border-[#021933] font-robotoFont hover:bg-[#051f3e] py-[5px] max-xl:px-[10px]" >
                        <NavLink to="/ProductUpdate" className={({isActive}) => isActive  ? "flex items-center bg-[#051f3e] px-[20px] " : "flex items-center px-[20px] " }>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="pl-[12px] py-[8px] w-full block max-lg:text-[14px] max-xl:text-[15px]">Product Update</span>
                        </NavLink>
                    </li>

                    <li className="text-[17px] border-b border-1 border-[#021933] font-robotoFont hover:bg-[#051f3e] px-[20px] py-[5px] max-xl:px-[10px] " >
                        <NavLink className="flex items-center">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="pl-[12px] py-[8px] w-full block max-lg:text-[14px] max-xl:text-[15px]">Product</span> 
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Sidebar