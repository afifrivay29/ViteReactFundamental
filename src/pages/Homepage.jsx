import { useState } from "react";
import Article from "../components/article";
import posts from "../posts.json" 

function Homepage() {
    const [search, setSearch] = useState("")
    const changeSearch = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value)
    }
    return (
        <>
            <h1>Simple Blog</h1>
            <div>cari artikel : <input onChange={changeSearch} /></div>
            <small>ditemukan 0 data dengan pencarian kata {search}</small>
            {posts.map(({title, tags, date}, index) => (
                <Article {...{ title, tags, date }} key={index} />
            ))}
        </>
    )
}

export default Homepage;