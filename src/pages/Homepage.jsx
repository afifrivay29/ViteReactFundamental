import { useState, useEffect } from "react";

import Article from "../components/article";
import postsData from "../posts.json" 
import Search from "../components/Search"


function Homepage() {
    const [posts, setPosts] = useState(postsData);
    const [totalPost, setTotalPost] = useState(0);
    const [externalPosts, setExternalPosts] = useState([])

    const onSearchChange = (value) => {
        const filteredPosts = postsData.filter((item) => 
            item.title.includes(value)
        );
        setPosts(filteredPosts);
        setTotalPost(filteredPosts.length);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setExternalPosts(json));
    }, [])

    return (
        <>
            <h1>Simple Blog</h1>
            <Search onSearchChange={onSearchChange} totalPost={totalPost} />
            {posts.map(({title, tags, date}, index) => (
                <Article {...{ title, tags, date }} key={index} />
            ))}
            <hr />
            <h2>External Posts</h2>
            {externalPosts.map(({title}, index) => (
                <div key={index}>- {title}</div>
            ))}
        </>
    )
}

export default Homepage;