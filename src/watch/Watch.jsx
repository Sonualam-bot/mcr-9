import "./Watch.css"

import { useContext, useState } from "react"
import { useParams } from "react-router"
import { VideoContext } from "../context/VideoContext"

import { MdDelete, MdEditNote, MdModeEditOutline, MdOutlinePlaylistAdd, MdOutlineWatchLater, MdWatchLater } from "react-icons/md"
import { NavLink } from "react-router-dom"
import { Note } from "../note/Note"
import { AddPlaylist } from "../newPlaylist/AddPlaylist"


export const Watch = () => {
    const { state: { videos, watchLater, playlist }, addToWatchLater, removeFromWatchLater, dispatch, deleteNotes } = useContext(VideoContext)
    const { watchVideoId } = useParams()

    const [show, setShow] = useState(false)
    const [createPlaylist, setCreatePlaylist] = useState(false)

    const [editingIndex, setEditingIndex] = useState(null);
    const [editedNote, setEditedNote] = useState("");

    const startEditingNote = (note, index) => {
        setEditedNote(note);
        setEditingIndex(index);
    };

    const cancelEditing = () => {
        setEditingIndex(null);
        setEditedNote("");
    };

    const saveEditedNote = (videoId, index) => {
        if (editedNote.trim() !== "") {
            dispatch({
                type: "EDIT_NOTE",
                payload: {
                    videoId,
                    index,
                    editedNote,
                },
            });
            setEditingIndex(null);
            setEditedNote("");
        }
    };



    const selectedVideoToWatch = videos.filter((video) => video._id === +watchVideoId)


    const addRemove = (_id) => watchLater.some((video) => video._id === _id)

    const addVideoToPlaylist = (playlistId, video) => {
        const updatedPlaylist = playlist.find((videoObj) => videoObj._id === playlistId)

        const addedVideo = updatedPlaylist.videos.push(video)

        const newPlaylist = playlist.map((list) => list._id === addedVideo._id ? { ...addedVideo } : list)


        dispatch({
            type: "ADD_VIDEO_TO_PLAYLIST",
            payload: {
                addVideoToPlaylist: newPlaylist
            }
        })
    }

    const theNotes = videos.find((video) => video._id === +watchVideoId)


    return (
        <>

            <div className="videoPageContainer" >

                <div className="selectedVideoToWatch" >
                    {selectedVideoToWatch.map((video) => {
                        const { _id, title, src } = video
                        return (
                            <div key={_id} className="playvideoContainer" >
                                <iframe src={src} title="funny">
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
                                        <MdOutlinePlaylistAdd onClick={() => setCreatePlaylist(!createPlaylist)} />
                                        <MdEditNote onClick={() => setShow(!show)} />
                                    </div>

                                </div>

                                <h3>My Notes</h3>
                                {show && <Note setShow={setShow} _id={_id} />}
                                {theNotes?.notes?.map((note, index) => {
                                    return (
                                        <div className="notesSections" key={index} >

                                            {editingIndex === index ? (
                                                <>
                                                    <input
                                                        type="text"
                                                        value={editedNote}
                                                        onChange={(e) => setEditedNote(e.target.value)}
                                                    />
                                                    <button onClick={() => saveEditedNote(_id, index)}>Save</button>
                                                    <button onClick={cancelEditing}>Cancel</button>
                                                </>
                                            ) : (

                                                <>
                                                    {note}
                                                    <div className="notesvgs">
                                                        <MdModeEditOutline onClick={() => startEditingNote(note, index)} />
                                                        <MdDelete onClick={() => deleteNotes(_id, index)} />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    )
                                })}

                                {createPlaylist && <AddPlaylist setCreatePlaylist={setCreatePlaylist} addPlaylist _id={_id} addVideoToPlaylist={addVideoToPlaylist} video={video} />}

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
                                <NavLink to={`/watch/${_id}`} className="videoDiv_img" >
                                    <img src={thumbnail} alt="thumbnail" />
                                </NavLink>


                                <NavLink to={`/watch/${_id}`} className="navlink">
                                    <h3> {title} </h3>
                                    <p> {creator} </p>
                                </NavLink>

                            </div>
                        )
                    })}

                </div>



            </div>
        </>
    )
}