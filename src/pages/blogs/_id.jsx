import { useLoaderData } from "react-router-dom"


function SinglePage() {
    const post = useLoaderData()

    return(
        <>
            <h1>{post?.title}</h1>
            <h3>{post?.body}</h3>
        </>
    )
}

export default SinglePage