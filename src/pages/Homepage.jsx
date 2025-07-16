import { useState } from "react";

import Article from "../components/article";
import postsData from "../posts.json" 
import Search from "../components/Search"


function Homepage() {
    const [posts, setPosts] = useState(postsData);
    const [totalPost, setTotalPost] = useState(0);

    const onSearchChange = (value) => {
        const filteredPosts = postsData.filter((item) => 
            item.title.includes(value)
        );
        setPosts(filteredPosts);
        setTotalPost(filteredPosts.length);
    }

    return (
        <>
            <h1>Simple Blog</h1>
            <Search onSearchChange={onSearchChange} totalPost={totalPost} />
            {posts.map(({title, tags, date}, index) => (
                <Article {...{ title, tags, date }} key={index} />
            ))}
        </>
    )
}

export default Homepage;