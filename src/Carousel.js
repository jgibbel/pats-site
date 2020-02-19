import React from 'react';
import './index.css';
import backButton from './back-arrow.svg'
import forwardButton from './forward-arrow.svg'

class Carousel extends React.Component {

    state = {
        index: 0,
        isOpen: false     
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
        window.scrollTo(0,0);
    }

    back = () => {
        if (this.state.index === 0) {
            this.setState({
                index: this.props.images.length - 1
            })
        } else {
            this.setState({
                index: this.state.index - 1
            })
        }
    }

    forward = () => {
        if (this.state.index === this.props.images.length - 1) {
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }


    render(){
        const {index, isOpen} = this.state
        const images = this.props.images

        return (
            <div className="caro-container">
                
                <img className="caro-image" src={images[index].image} onClick={this.toggle} alt={images[index].caption} />
                
                <div className="caro-bottom-row">
                    <div className="back-button" onClick={this.back}><img className="svg" src={backButton} alt="Previous"/></div>
                    <p className="caro-caption">{images[index].caption}</p>
                    <div className="forward-button" onClick={this.forward}><img className="svg" src={forwardButton} alt="Next"/></div>
                </div>

                {isOpen && <><div className="image-popup" onClick={this.toggle}></div>
                <img className="highlight-image" src={images[index].image} alt={images[index].caption} onClick={this.forward} /></>}
            
            </div>

        )
    }
}

export default Carousel;