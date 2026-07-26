import { useState } from "react"

function SearchBar({ onSubmit }) {
    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        if (inputValue.trim() === "") {
            return
        }
        onSubmit(inputValue)
        setInputValue("")
    }

    return (
        <header className="searchbar">
            <form onSubmit={handleSumbit} className="form">
                <button type="submit" className="button">
                    <span className="button-label">Search</span>
                </button>

                <input
                    onChange={handleChange}
                    value={inputValue}
                    className="input"
                    type="text"
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}

export default SearchBar