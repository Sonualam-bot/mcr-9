import { createContext, useReducer } from "react"
import { initialState, videoReducer } from "../pages/reducer/videoReducer"

export const VideoContext = createContext()


export const VideoContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(videoReducer, initialState)


    const value = {
        state
    }


    return (
        <>
            <VideoContext.Provider value={value} >
                {children}
            </VideoContext.Provider>
        </>
    )
}
