import { useContext } from "react"
import "./Note.css"
import { VideoContext } from "../context/VideoContext"
import { ImCross } from "react-icons/im"
import { toast } from "react-hot-toast"

export const Note = ({ setShow, _id }) => {
    const { dispatch, addNotes, state } = useContext(VideoContext)
    const { noteValue } = state

    const handleAddNote = (videoId) => {
        if (noteValue.trim() === "") {
            toast.error("Add a Note ")
        } else {
            addNotes(videoId);
            toast.success("Noted Added")
            setShow(false)
        }
    }


    return (
        <>

            <div className="noteContainer" >
                <h2>Add To Note</h2>
                <ImCross onClick={() => setShow(false)} />
                <input type="text" placeholder="New Notes" value={noteValue}
                    onChange={(e) => dispatch({
                        type: "NOTE",
                        payload: {
                            note: e.target.value
                        }
                    })} />
                <button onClick={() => handleAddNote(_id)} >Add New Note</button>
            </div>
        </>
    )
}