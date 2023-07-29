import { useContext } from "react"
import "./Note.css"
import { VideoContext } from "../context/VideoContext"
export const Note = () => {
    const { dispatch, addNotes, state } = useContext(VideoContext)
    const { noteValue } = state
    return (
        <>
            <div></div>
            <div className="noteContainer" >
                <input type="text" placeholder="New Notes" value={noteValue}
                    onChange={(e) => dispatch({
                        type: "NOTE",
                        payload: {
                            note: e.target.value
                        }
                    })} />
                <button onClick={addNotes} >Add New Note</button>
            </div>
        </>
    )
}