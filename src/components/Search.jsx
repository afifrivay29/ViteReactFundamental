import { useState } from "react"

function Search(props) {
    const [search, setSearch] = useState("")
    const changeSearch = (event) => {
        setSearch(event.target.value)
        props.onSearchChange(event.target.value)
    }
    return (
        <>
            <div>cari artikel : <input onChange={changeSearch} /></div>
            <small>ditemukan 0 data dengan pencarian kata {search}</small>
        </>
    )
}

export default Search;