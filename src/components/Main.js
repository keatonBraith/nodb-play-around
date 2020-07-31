import React, { Component } from "react";
import List from "./List";
import Post from "./Post"

class Main extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div>
                This is my main
                <List/>
                <Post/>
            </div>
        )
    }
}

export default Main;