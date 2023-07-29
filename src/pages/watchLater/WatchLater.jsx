import { useContext } from "react"
import { VideoContext } from "../../context/VideoContext"
import { Cards } from "../../cards/Cards"

export const WatchLater = () => {
    const { state: { watchLater } } = useContext(VideoContext)

    console.log(watchLater)
    return (
        <>
            <div className="categorySpecial" >
                <h2> Watch Later </h2>

                <div className="selectedCategoryContainer" >
                    {watchLater.map((video) => {

                        return (
                            <Cards key={video._id} video={video} />
                        )
                    })}
                </div>


            </div>
        </>
    )
}