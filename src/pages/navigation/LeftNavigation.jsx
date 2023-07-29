import "./LeftNavigation.css"

import { NavLink } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"
import { MdExplore, MdOutlinePlaylistAdd, MdWatchLater } from "react-icons/md"


export const LeftNavigation = () => {
    return (
        <>
            <div className="navigationContainer" >



                <NavLink to="/" className="sidebarOptions" >
                    <AiFillHome />
                    <span>Home</span>
                </NavLink>

                <NavLink to="/explore" className="sidebarOptions" >
                    <MdExplore />
                    <span>Explore</span>
                </NavLink>

                <NavLink to="/playlists" className="sidebarOptions" >
                    <MdOutlinePlaylistAdd />
                    <span>Playlists</span>
                </NavLink>


                <NavLink to="/watchlater" className="sidebarOptions" >
                    <MdWatchLater />
                    <span>Watch Later</span>
                </NavLink>




            </div>
        </>
    )
}