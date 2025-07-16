import { useState, useEffect} from "react"
import { Link } from "react-router-dom"

function Blog() {
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPost(json));
    }, [])

    return (
        <>
            <h1>My Blog</h1>
            {post.map((item, index) => (
                <div key={index}>
                    <Link to={`/blog/${item.id}`}>- {item.title}</Link>
                </div>
            ))}
        </>
    )
}

export default Blog