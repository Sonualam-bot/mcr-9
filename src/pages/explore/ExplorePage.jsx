import "./ExplorePage.css"
import { useContext } from "react"
import { VideoContext } from "../../context/VideoContext"
import { Cards } from "../../cards/Cards"

export const ExplorePage = () => {
    const { dispatch, searchVideoByTitle, state: { searchValue } } = useContext(VideoContext)
    return (
        <>
            <div>
                <h2>Explore</h2>

                <div className="searchDiv" >
                    <input type="text" placeholder="Search Video By title" value={searchValue} onChange={(e) => {
                        dispatch({
                            type: "SEARCH",
                            payload: { search: e.target.value }
                        })
                    }} />
                </div>

                <div className="explorePage" >
                    {searchVideoByTitle?.map((video) => {

                        return (
                            <Cards key={video._id} video={video} />
                        )
                    })}
                </div>

            </div>
        </>
    )
}