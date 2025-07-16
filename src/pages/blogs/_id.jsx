import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


function SinglePage() {
    const params = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then((response) => response.json())
            .then((json) => setPost(json));
    }, [])

    return(
        <>
            <h1>{post?.title}</h1>
            <h3>{post?.body}</h3>
        </>
    )
}

export default SinglePage