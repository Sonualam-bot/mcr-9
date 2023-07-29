import "./Homepage.css"
import { VideoContext } from "../../context/VideoContext"
import { useContext } from "react"
import { NavLink } from "react-router-dom"

export const Homepage = () => {
    const { state: { categories } } = useContext(VideoContext)
    console.log(typeof categories)
    return (
        <>
            <div>
                <h1>Categories</h1>

                <ul className="categoryContainer" >
                    {categories?.map((video) => {
                        const { _id, thumbnail, category } = video
                        return (
                            <li key={_id} className="categorySpecial" >
                                <NavLink to={`/catVideoList/${_id} `}  >
                                    <img src={thumbnail} alt="thumbnail" />
                                    <h3>{category}</h3>
                                </NavLink>

                            </li>
                        )
                    })}
                </ul>

            </div>


        </>
    )
}