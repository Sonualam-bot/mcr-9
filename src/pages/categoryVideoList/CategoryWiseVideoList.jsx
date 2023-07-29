import "./CategoryWiseVideo.css"

import { useContext } from "react"
import { VideoContext } from "../../context/VideoContext"
import { useParams } from "react-router"


import { Cards } from "../../cards/Cards"

export const CategoryWiseVideoList = () => {
    const { state: { videos }, addToWatchLater } = useContext(VideoContext);
    const { selectedCategory } = useParams();

    const showSelectedCategoryVideo = videos?.filter((video) => video?.category === selectedCategory)

    return (
        <>
            <div className="categorySpecial" >
                <h2> {selectedCategory} </h2>

                <div className="selectedCategoryContainer" >
                    {showSelectedCategoryVideo.map((video) => {

                        return (
                            <Cards key={video._id} video={video} />
                        )
                    })}
                </div>


            </div>
        </>
    )
}