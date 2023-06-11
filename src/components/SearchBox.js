import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <input
            className="pa3 ba b--green bg-lightest-blue"
            placeholder="Search Robots"
            type="search"
            onChange={searchChange}
        />
    )
}

export default SearchBox;