import React, { Component } from "react";
import List from "./List";
import Post from "./Post"
import axios from "axios"

class Main extends Component {
    constructor(){
        super()
        this.state = {
            memories: []
        }
        this.editMemory = this.editMemory.bind(this)
        this.addMemory = this.addMemory.bind(this)
    }

    componentDidMount(){
        axios.get('/api/memories')
        .then((response) => {
            this.setState({memories: response.data})
        })
        .catch(err => console.log(err))
    }

    addMemory = (e, url, description, date) => {
        e.preventDefault()
        axios.post("/api/memories", {url, description, date})
        .then((response) => {
            this.setState({memories: response.data})
        })
        .catch((err) => console.log(err))
    }

    editMemory = (id, description) => {
        console.log(id, description)
        axios.put(`/api/memories/edit/${id}`, {description})
        .then((response) => {
            this.setState({memories: response.data})
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <List addMemory={this.addMemory}/>
                {this.state.memories.map((elem) => {
                return <Post
                info={elem}
                key={elem.id}
                editMemory={this.editMemory}/>})}
            </div>
        )
    }
}

export default Main;