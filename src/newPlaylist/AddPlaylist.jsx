import { useContext } from "react"
import "./AddPlaylist.css"

import { VideoContext } from "../context/VideoContext"

import { ImCross } from "react-icons/im"
import { RxCross1 } from "react-icons/rx"
import toast from "react-hot-toast"

export const AddPlaylist = ({ setCreatePlaylist, addPlaylist, setShowPlaylist, playlistPage, video, addVideoToPlaylist }) => {
    const { dispatch, state: { createPlaylist, playlist }, addNewPlaylist, deletePlaylist } = useContext(VideoContext)


    const handleCreateNewPlaylist = () => {
        if (createPlaylist.title.trim() === "" || createPlaylist.description.trim() === "") {
            toast.error("Input fields can't be empty")
        } else {
            addNewPlaylist()
            toast.success("New Playlist Created")
        }
    }




    return (
        <>
            <div className="playlistContainer" >
                <div className="closeModal">
                    {addPlaylist && <ImCross onClick={() => setCreatePlaylist(false)} />}
                    {playlistPage && <ImCross onClick={() => setShowPlaylist(false)} />}
                </div>

                <h2>Add To Playlist</h2>

                <input
                    type="text"
                    placeholder="Enter title of your playlist"
                    value={createPlaylist.title}
                    onChange={(e) =>
                        dispatch({
                            type: "SET_PLAYLIST_TITLE",
                            payload: {
                                title: e.target.value,
                            },
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="Write a description"
                    value={createPlaylist.description}
                    onChange={(e) =>
                        dispatch({
                            type: "SET_PLAYLIST_DESCRIPTION",
                            payload: {
                                description: e.target.value,
                            },
                        })
                    }
                />

                {playlistPage ?
                    <button onClick={() => {
                        handleCreateNewPlaylist()
                        setShowPlaylist(false)
                    }} >Create New Playlist </button> : <button onClick={handleCreateNewPlaylist} >Create New Playlist </button>}



                {addPlaylist &&
                    <div className="myPlaylist" >
                        <h3> My playlist </h3>

                        {playlist?.map((list) => {
                            return (
                                <div key={list._id} className="addedPlaylist">
                                    <h3 onClick={() => {
                                        addVideoToPlaylist(list._id, video);
                                        toast.success("Added To Playlist")
                                    }} > {list.title} </h3>
                                    {/* <div> */}
                                    <RxCross1 className="deleteSvg" onClick={() => {
                                        deletePlaylist(list._id);
                                        toast.success("Playlist Deleted")
                                    }} />
                                    {/* </div> */}

                                </div>
                            )
                        })}
                    </div>}
            </div>
        </>
    )
}