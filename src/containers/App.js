import React, { Component } from "react";
import RobotCardList from "../components/RobotCardList";
import SearchBox from "../components/SearchBox"
class App extends Component {

    constructor() {
        super()
        this.state = {
            searchFilerRobos: [],
            searchText: ""
        }
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => { return response.json() })
            .then(users => { this.setState({ searchFilerRobos: users }) })
    }

    onSearchChange = (event) => {
        this.setState({ searchText: event.target.value })
    }

    render() {
        const filteredRobos = this.state.searchFilerRobos.filter(robots => {
            return robots.username.toLocaleLowerCase().includes(this.state.searchText.toLocaleLowerCase()) || robots.email.toLocaleLowerCase().includes(this.state.searchText.toLocaleLowerCase())
        })
        if (this.state.searchFilerRobos.length === 0) {
            return (<h1 >Loading....</h1>)
        }
        else
            return (
                <div>
                    <SearchBox searchChange={this.onSearchChange} />
                    <RobotCardList robots={filteredRobos} />
                </div>)
    }
}

export default App;