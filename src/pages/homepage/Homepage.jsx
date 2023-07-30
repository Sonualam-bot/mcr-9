import "./Homepage.css"
import { VideoContext } from "../../context/VideoContext"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Header } from "../../component/Header"

export const Homepage = () => {
    const { state: { categories } } = useContext(VideoContext)

    return (
        <>
            {/* <Header /> */}
            <div>
                <h1>Categories</h1>

                <ul className="categoryContainer" >
                    {categories?.map((video) => {
                        const { _id, thumbnail, category } = video
                        return (
                            <li key={_id} className="categorySpecial" >
                                <NavLink to={`/catVideoList/${category}`} className="navlink" >
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