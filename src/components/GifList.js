import React from 'react'

export default class GifList extends React.Component{

    render(){
        
        return(
            <div>
            <ul >
                {this.props.gifs.map(gif => <img key={gif.id} src={gif.images.original.url} alt=""/>)}
            </ul>
            </div>
        )
    }
}