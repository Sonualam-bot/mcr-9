import "./AddPlaylist.css"

import { useContext } from "react"
import { VideoContext } from "../context/VideoContext"
import { Cards } from "../cards/Cards"
import { useParams } from "react-router"

export const SinglePlayistPage = () => {
    const { state: { playlist } } = useContext(VideoContext)
    const { title } = useParams()

    const renderPlaylist = playlist.find((list) => list.title === title)

    console.log(renderPlaylist)

    return (
        <>
            <div>
                <h2>{title}</h2>

                <div className="singlePlaylistVideo" >
                    {renderPlaylist?.videos?.map((video) => {

                        return (
                            <Cards key={video._id} video={video} />
                        )
                    })}
                </div>

            </div>
        </>
    )
}