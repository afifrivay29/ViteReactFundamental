import Article from "../components/article";
import postsData from "../posts.json" 
import Search from "../components/Search"
import { useState } from "react";

function Homepage() {
    const [posts, setPosts] = useState(postsData);

    const onSearchChange = (value) => {
        const filteredPosts = postsData.filter((item) => 
            item.title.includes(value)
        );
        setPosts(filteredPosts);
    }
    return (
        <>
            <h1>Simple Blog</h1>
            <Search onSearchChange={onSearchChange}/>
            {posts.map(({title, tags, date}, index) => (
                <Article {...{ title, tags, date }} key={index} />
            ))}
        </>
    )
}

export default Homepage;