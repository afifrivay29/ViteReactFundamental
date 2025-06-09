import Article from "../components/article";
import posts from "../posts.json" 

function Homepage() {
    return (
        <>
            <h1>Simple Blog</h1>
            {posts.map((blog) => (
                <Article title={blog.title} tags={blog.tags} date={blog.date} />
            ))}
        </>
    )
}

export default Homepage;