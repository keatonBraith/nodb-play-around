import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    const { url, description, date } = this.props.info;
    this.state = {
      edit: false,
      url: url,
      description: description,
      date: date,
    };
  }

  handleChange = (value) => {
    this.setState({ description: value });
  };

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  saveDescription = (e) => {
    e.preventDefault();
    console.log(this.props);
    this.props.editMemory(this.props.info.id, this.state.description);
    this.toggleEdit();
  };

  render() {
    return (
      <div className="post">
        <div className="post-btns">
          <button className="edit-button" onClick={this.toggleEdit}>
            Edit
          </button>
          <button
            className="delete-button"
            onClick={() => this.props.deleteMemory(this.props.info.id)}
          >
            Delete
          </button>
        </div>
        <main className="post-main">
          <div className="image-containers">
            <img
              className="post-image"
              src={this.props.info.url}
              alt="Memory"
            />
          </div>
          <div className="post-side">
            {this.state.edit ? (
              <div>
                <textarea
                  className="edit-input"
                  type="text"
                  value={this.state.description}
                  onChange={(e) => {
                    this.handleChange(e.target.value);
                  }}
                ></textarea>
                <button className="save-button" onClick={this.saveDescription}>
                  Save
                </button>
                <button className="cancel-button" onClick={this.toggleEdit}>
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <p className="post-description">
                  {this.props.info.description}
                </p>
              </div>
            )}
            <p className="post-date">{this.props.info.date}</p>
          </div>
        </main>
      </div>
    );
  }
}

export default Post;
