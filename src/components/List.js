import React, { Component } from "react";

class List extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="input-main">
                <input/>
                <input/>
                <input/>
                <button className="input-btn">ADD</button>
            </div>
        )
    }
}

export default List;