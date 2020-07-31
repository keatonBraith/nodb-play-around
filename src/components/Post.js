import React from "react";

const Post = () => {
    return (
        <div>
            <button>Edit</button>
            <button>Delete</button>
            <div>
                <img className="logo"/>
                <div>
                    <p>Description</p>
                    <p>Date</p>
                </div>
            </div>
        </div>
    )
}

export default Post;