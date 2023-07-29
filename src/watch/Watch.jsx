import "./Watch.css"

import { useContext, useState } from "react"
import { useParams } from "react-router"
import { VideoContext } from "../context/VideoContext"

import { MdEditNote, MdOutlinePlaylistAdd, MdOutlineWatchLater, MdWatchLater } from "react-icons/md"
import { NavLink } from "react-router-dom"
import { Note } from "../note/Note"


export const Watch = () => {
    const { state: { videos, watchLater, addNotes }, addToWatchLater, removeFromWatchLater } = useContext(VideoContext)
    const { watchVideoId } = useParams()

    const [show, setShow] = useState(false)

    const { } = useContext(VideoContext)

    const selectedVideoToWatch = videos.filter((video) => video._id === +watchVideoId)


    const addRemove = (_id) => watchLater.some((video) => video._id === _id)


    return (
        <>

            <div className="videoPageContainer" >

                <div className="selectedVideoToWatch" >
                    {selectedVideoToWatch.map((video) => {
                        const { _id, title, src } = video
                        return (
                            <div key={_id} className="playvideoContainer" >
                                <iframe src={src}>
                                </iframe>
                                <div className="videoDetailsCont" >

                                    <div className="videoName">
                                        <img src="https://picsum.photos/40/40" alt="user" />
                                        <h3> {title} </h3>
                                    </div>

                                    <div className="videoIcons">
                                        {addRemove(_id) ?
                                            <MdWatchLater onClick={() => removeFromWatchLater(_id)} className="videoSvg" /> :
                                            <MdOutlineWatchLater onClick={() => addToWatchLater(_id)} className="videoSvg" />}
                                        <MdOutlinePlaylistAdd />
                                        <MdEditNote onClick={() => setShow(!show)} />
                                    </div>

                                </div>

                                <h3>My Notes</h3>
                                {show && <Note />}
                                {addNotes.map((note) => <div> {note} </div>)}

                            </div>
                        )
                    })}
                </div>

                <div className="videoParent" >
                    <h3>More Videos</h3>
                    {videos.map((video) => {
                        const { _id, thumbnail, title, creator } = video
                        return (
                            <div key={_id} className="videoDIv" >
                                <img src={thumbnail} alt="thumbnail" />
                                <div>
                                    <NavLink className="navlink">
                                        <h3> {title} </h3>
                                        <p> {creator} </p>
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })}

                </div>



            </div>
        </>
    )
}