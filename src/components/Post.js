import React from "react";

const Post = () => {
    return (
        <div className="post">
            <div className="post-btns">
                <button>Edit</button>
                <button>Delete</button>
            </div>
            <main className="post-main">
                <div className="post-image">image</div>
                <div className="post-side">
                    <p className="post-description">Description</p>
                    <p className="post-date">Date</p>
                </div>
            </main>
        </div>
    )
}

export default Post;