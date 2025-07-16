import { Link } from "react-router-dom"
import { useLoaderData } from "react-router-dom"

function Blog() {
    const posts = useLoaderData()

    return (
        <>
            <h1>My Blog</h1>
            {posts.map((item, index) => (
                <div key={index}>
                    <Link to={`/blog/${item.id}`}>- {item.title}</Link>
                </div>
            ))}
        </>
    )
}

export default Blog