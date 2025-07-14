import { useState } from "react"

function Search(props) {
    const [search, setSearch] = useState("")

    const changeSearch = () => {
        props.onSearchChange(search)
    }

    const handleKeydown = (e) => {
        if(e.key === "Enter") {
            changeSearch()
        }
    }

    return (
        <>
            <div>cari artikel : 
                <input onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeydown}/>
                <button onClick={changeSearch}>Cari</button>
            </div>
            <small>ditemukan {props.totalPost} data dengan pencarian kata... "{search}"</small>
        </>
    )
}

export default Search;