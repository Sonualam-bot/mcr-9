import { createContext, useEffect, useReducer } from "react"
import { initialState, videoReducer } from "../pages/reducer/videoReducer"

export const VideoContext = createContext()


export const VideoContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(videoReducer, initialState)


    const addToWatchLater = (videoId) => {
        state.videos.filter((video) => {
            if (video._id === videoId) {
                dispatch({
                    type: "ADD_TO_WATCH_LATER",
                    payload: {
                        addVideoToWatchLater: video
                    }
                })
            }
        })
    }



    const removeFromWatchLater = (videoId) => {
        const removeVideo = state.watchLater.filter((video) => video._id !== videoId)
        dispatch({
            type: "REMOVE_FROM_WATCH_LATER",
            payload: {
                removeFromWatchLater: removeVideo
            }
        })
    }

    const searchVideoByTitle =
        state.searchValue === ""
            ? state?.videos : state.exploreVideos.filter((video) => video?.title.toLowerCase().includes(state?.searchValue.toLowerCase()))




    const addNotes = (videoId) => {
        const targetedVideo = state.videos.find((video) => video._id === videoId)

        if (!targetedVideo.hasOwnProperty("notes")) {
            targetedVideo.notes = []
        }

        targetedVideo.notes.push(state.noteValue)

        const updatedVideos = state.videos.map((video) => video._id === videoId ? { ...targetedVideo } : video)

        dispatch({
            type: "ADD_NOTES",
            payload: {
                addNote: updatedVideos
            }
        });
    };

    const deleteNotes = (videoId, index) => {
        const deleteNote = state.videos.find((video) => video._id === videoId)

        const deleteTheNote = deleteNote.notes.filter((_, i) => i !== index)

        const updatedVideo = { ...deleteNote, notes: [...deleteTheNote] }

        const updatedVideoContent = state.videos.map((video) => video._id === videoId ? { ...updatedVideo } : video)

        dispatch({
            type: "DELETE_NOTES",
            payload: {
                deleteNote: updatedVideoContent
            }
        })
    }

    const addNewPlaylist = () => {
        const newPlaylist = {
            _id: state.createPlaylist.length + 1,
            title: state.createPlaylist.title,
            description: state.createPlaylist.description,
            url: "https://picsum.photos/304/174",
        };


        dispatch({
            type: "ADD_PLAYLIST",
            payload: {
                playlist: newPlaylist
            }
        })
    }

    const deletePlaylist = (_id) => {

        const deletePlaylist = state.playlist.filter((list) => list._id !== _id)

        dispatch({
            type: "DELETE_PLAYLIST",
            payload: {
                deletePlaylist: deletePlaylist
            }
        })
    }

    const editNotes = (videoId, index, editedNote) => {
        const editedVideo = state.videos.find((video) => video._id === videoId);
        editedVideo.notes[index] = editedNote;

        const updatedVideos = state.videos.map((video) =>
            video._id === videoId ? { ...editedVideo } : video
        );

        dispatch({
            type: "EDIT_NOTES",
            payload: {
                editedNote: updatedVideos,
            },
        });
    };


    useEffect(() => {
        const storedState = localStorage.getItem("videoAppState");
        if (storedState) {
            dispatch({ type: "LOAD-STATE", payload: JSON.parse(storedState) });
        }
    }, []);

    useEffect(() => {
        if (state !== initialState) {
            localStorage.setItem("videoAppState", JSON.stringify(state));
        }
    }, [state]);


    const value = {
        state,
        dispatch,
        addToWatchLater,
        removeFromWatchLater,
        searchVideoByTitle,
        addNotes,
        addNewPlaylist,
        deletePlaylist,
        deleteNotes,
        editNotes
    }


    return (
        <>
            <VideoContext.Provider value={value} >
                {children}
            </VideoContext.Provider>
        </>
    )
}
