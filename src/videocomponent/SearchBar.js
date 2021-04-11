import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {searchText: ''}

    handleChange = (event) => {
        event.preventDefault();
        this.setState({searchText: event.target.value})
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        // TODO: call callback function from parent
        this.props.onFormSubmit(this.state.searchText)
    }

    render() {
        return (
            <>
            <div className="searchbar ui segment">
            <form onSubmit={this.handleFormSubmit} className="ui form">
            <div className="field">
                <label>
                Video Search
                <input  type="text" value={this.state.searchText}    onChange={this.handleChange } />
                </label>
            </div>
            </form>
            </div>
            </>
        );
    }
}
