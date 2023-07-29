import { createContext, useReducer } from "react"
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


    const value = {
        state,
        addToWatchLater,
        removeFromWatchLater
    }


    return (
        <>
            <VideoContext.Provider value={value} >
                {children}
            </VideoContext.Provider>
        </>
    )
}
