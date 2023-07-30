import "./Playlists.css"
import { useContext, useState } from "react"
import { VideoContext } from "../../context/VideoContext"
import { RxCross1 } from "react-icons/rx"
import { IoMdAddCircleOutline } from "react-icons/io"
import { AddPlaylist } from "../../newPlaylist/AddPlaylist"
import { NavLink } from "react-router-dom"

export const Playlists = () => {
    const { state: { playlist }, deletePlaylist } = useContext(VideoContext)
    const [showPlaylist, setShowPlaylist] = useState(false)
    return (
        <>
            <h2>Playlists</h2>
            <div className="playlistCreated" >
                {playlist.map((list) => {
                    const { _id, title, url, description } = list
                    return (
                        <div key={_id} className="playlistSpecial" >
                            <RxCross1 className="deleteSvg" onClick={() => deletePlaylist(_id)} />
                            <NavLink to={`/singlePlaylist/${title}`} >
                                <img src={url} alt="list" />
                            </NavLink>

                            <p> {title} </p>
                            <p> {description} </p>
                        </div>
                    )
                })}
                <div className="createPlay">
                    <IoMdAddCircleOutline onClick={() => setShowPlaylist(!showPlaylist)} />

                    <div className="showAddModal"  >
                        {showPlaylist && <AddPlaylist setShowPlaylist={setShowPlaylist} playlistPage />}
                    </div>

                </div>
            </div>
        </>
    )
}