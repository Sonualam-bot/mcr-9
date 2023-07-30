import "./Cards.css"
import { useContext } from "react";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md"
import { VideoContext } from "../context/VideoContext";
import { NavLink } from "react-router-dom";

export const Cards = ({ video }) => {
    const { addToWatchLater, removeFromWatchLater, state: { watchLater } } = useContext(VideoContext)
    const { _id, title, views, thumbnail, creator, category } = video;

    const addRemove = (_id) => watchLater.some((video) => video._id === _id)


    return (
        <>
            <div key={_id} className="selectedCategoryVideos" >
                {addRemove(_id) ?
                    <MdWatchLater onClick={() => removeFromWatchLater(_id)} className="svg" /> :
                    <MdOutlineWatchLater onClick={() => addToWatchLater(_id)} className="svg" />}

                <NavLink to={`/watch/${_id}`} >
                    <img src={thumbnail} alt="thumbnail" className="selectVideoImage" />
                </NavLink>

                <div className="videoDetails" >
                    <img src="https://picsum.photos/40/40" alt="roundPhoto" />

                    <div className="detailsSpecial" >
                        <NavLink to={`/watch/${_id}`} className="navlink" >
                            <h3> {title} </h3>
                            <h3> {category} </h3>
                        </NavLink>
                        <div className="createrDetails">
                            <p> {views} views </p>
                            <p> {creator} </p>
                        </div>
                    </div>


                </div>


            </div>
        </>
    )
}