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
                <input className="inputs"/>
                <input className="inputs"/>
                <input className="inputs"/>
                <button className="input-btn">ADD</button>
            </div>
        )
    }
}

export default List;