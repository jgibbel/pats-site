import React from 'react';
import './index.css';
import BookData from './books.json'

import {
  Link,
} from "react-router-dom";


class Books extends React.Component {

    state = {
        all: 'selected',
        picture: "",
        board: "",
        middle: "",
        nonFic: "",
        filter: 'all'
        
    }

    handleSelect(type) {
        this.setState(
            {all: '',
            picture: "",
            board: "",
            middle: "",
            nonFic: "",}, () => {
                this.setState({
                    [type]: "selected",
                    filter: type
                })
            }
        )
    }

  render(){
      let BooksFiltered 
      const Books = BookData
      if (this.state.filter === 'all') {
          BooksFiltered = Books
      } else {
        BooksFiltered = Books.filter((book) => book.category === this.state.filter)
        // debugger
      }

    return (
        <div>

            <div className="book-select">
                <div onClick={()=>this.handleSelect('all')} className={"book-button " + this.state.all}>All</div> 
                <div onClick={()=>this.handleSelect('picture')} className={"book-button " + this.state.picture}>Picture</div> 
                <div onClick={()=>this.handleSelect('board')} className={"book-button " + this.state.board}>Compilation</div>  
                <div onClick={()=>this.handleSelect('middle')} className={"book-button " + this.state.middle}>Middle Grade</div>  
                <div onClick={()=>this.handleSelect('nonFic')} className={"book-button " + this.state.nonFic}>Non-fiction</div>      
            </div>



    <div className="Books" class="books-center-div books-wrapper">
        {BooksFiltered.sort((a, b) => (a.year < b.year) ? 1 : -1).map((bookDetail, index) => {
          return(
            <div className="books-cover-container">
            <Link to={"/" + bookDetail.url}>
              <img className="books-book-image" src={bookDetail.coverImage} alt={bookDetail.title}></img>
              <h4 className="books-title">{bookDetail.title}</h4>
              </Link>
            </div>
          )
        })}
    </div>

    </div>

  );
      }
}

export default Books;