import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component{
    state = {gifs: []}

    addGifs = (data) => {
        this.setState({gifs: data}, () => console.log(this.state))
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=code&api_key=dc6zaTOxFJmzC&rating=g')
        .then(resp => resp.json())
        .then(json => this.addGifs(json['data'].slice(0, 3)))
    }

    handleSearch = (e, input) => {
        e.preventDefault()

        fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(json => this.addGifs(json['data'].slice(0, 3))
        )
    }

    render() {
        return (
            <div>
                <GifSearch handleSearch={this.handleSearch}/>
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

//                {this.state.gifs ? this.state.gifs.map(gif => <GifList key={gif.id} gif={gif.images.original} />) : "Loading"}
