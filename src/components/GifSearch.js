import React from 'react'

export default class GifSearch extends React.Component{
    state = {input: ""}

    handleChange = (e) => {
        this.setState({input: e.target.value})
    }

    render(){
        return (
            <div>
                GifSearch:
                <form onSubmit={(e) => this.props.handleSearch(e, this.state.input)} onChange={this.handleChange}>
                <input type='text' id='input' value={this.state.input} />
                <button type='submit'>Search</button>
                </form>
                </div>
        )
    }
}