import React, { Component } from 'react'

export default class ImageCard extends Component {
    constructor(props) {
        super(props)

        this.state = { spans: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
        //console.log(this.imageRef.current.clientHeight);
    }



    setSpans = () => {

        const spans = Math.ceil(this.imageRef.current.clientHeight / 10);
        this.setState({ spans });
        console.log(spans);
    }


    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ 'gridRowEnd': `span ${this.state.spans}` }}>
                <img
                    alt={description}
                    src={urls.regular}
                    ref={this.imageRef}
                />
            </div>
        )
    }
}
