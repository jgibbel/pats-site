import React from 'react';
import './index.css';
import BookData from './books.json'

import {
  Link,
} from "react-router-dom";


class Books extends React.Component {

    state = {
        selection: "on",
        special: "off",
        filter: "all"
        
    }

    handleSelect(type) {
        this.setState(
            {selection: "off",
            }, () => {
                this.setState({
                    filter: type
                })
            }
        )
    }

    handleSelectSpecial(type) {
      this.setState(
          {selection: "off",
          special: "on"
          }, () => {
              this.setState({
                  filter: type
              })
          }
      )
  }

    handleReturn() {
      this.setState(
        {selection: "on",
        filter: "all"}
    )
    }

    handleReturnSpecial() {
      this.setState(
        {selection: "on",
        special: "off",
        filter: "all"}
    )
    }

  render(){
      let BooksFiltered 
      const Books = BookData
      console.log(Books.map((book) => book.title))
      if (this.state.filter === 'alpha' || this.state.filter === 'chrono') {
          BooksFiltered = Books
      } else {
        BooksFiltered = Books.filter((book) => book.category === this.state.filter)
        // debugger
      }

    return (
        <div>
          {(this.state.selection === "on") ? 
          <>
            <div className="book-select">
                <div onClick={()=>this.handleSelectSpecial('alpha')} className={"book-button"}>Books A-Z</div> 
                <div onClick={()=>this.handleSelectSpecial('chrono')} className={"book-button"}>Books Chronologically</div> 
                    
            </div>

            <div className="books-center-div category-select">
            <div onClick={()=>this.handleSelect('picture')} className="books-cover-container cursor">
                      <div>
                      <img className="books-book-image" src="https://www.patcummings.com/images/00picBook.jpg" alt="Picture Books"></img>
                      <h4 className="books-title">Picture Books</h4>
                      </div>
            </div>
            <div onClick={()=>this.handleSelect('middle')} className="books-cover-container cursor">
                      <div>
                      <img className="books-book-image" src="https://www.patcummings.com/images/00middleGrade.jpg" alt="Picture Books"></img>
                      <h4 className="books-title">Middle Grade</h4>
                      </div>
            </div>
            <div onClick={()=>this.handleSelect('compilation')} className="books-cover-container cursor">
                      <div>
                      <img className="books-book-image" src="https://www.patcummings.com/images/00compilations.jpg" alt="Picture Books"></img>
                      <h4 className="books-title">Compilations</h4>
                      </div>
            </div>
            <div onClick={()=>this.handleSelect('board')} className="books-cover-container cursor">
                      <div>
                      <img className="books-book-image" src="https://www.patcummings.com/images/00boardBook.jpg" alt="Picture Books"></img>
                      <h4 className="books-title">Board Books</h4>
                      </div>
            </div>
            <div onClick={()=>this.handleSelect('nonfiction')} className="books-cover-container cursor">
                      <div>
                      <img className="books-book-image" src="https://www.patcummings.com/images/00nonFic.jpg" alt="Picture Books"></img>
                      <h4 className="books-title">Nonfiction</h4>
                      </div>
            </div>
            <div onClick={()=>this.handleSelect('educational')} className="books-cover-container cursor">
                      <div>
                      <img className="books-book-image" src="https://www.patcummings.com/images/00educational.jpg" alt="Picture Books"></img>
                      <h4 className="books-title">Educational</h4>
                      </div>
            </div>   
        </div>
        </>
            : null}
        {(this.state.selection === "off" && this.state.special === "off") ?
            <div  className="Books" class="books-center-div books-wrapper">
              <div onClick={()=>this.handleReturn()} className="books-cover-container cursor">
                      <div>
                      <img className="books-book-image" src="https://www.patcummings.com/images/back.jpg"></img>
                      <h4 className="books-title">Back</h4>
                      </div>
              </div>

                {BooksFiltered.sort((a, b) => (a.year < b.year) ? 1 : -1).map((bookDetail, index) => {
                  return(
                    <>
                    {(bookDetail.url === "none") ? 
                    <div className="books-cover-container">
                    <div>
                      <img className="books-book-image" src={bookDetail.coverImage} alt={bookDetail.title}></img>
                      <h4 className="books-title">{bookDetail.title}</h4>
                      {(this.state.filter === "compilation") ? <p className="books-comp-info">{bookDetail.author}<br />With art by multiple illustrators<br /><br /> <i>{bookDetail.italic}</i> <br/>{bookDetail.postText}</p> : null}
                      </div>
                    </div>
                  : 
                    
                  <div className="books-cover-container cursor">
                  <Link to={"/" + bookDetail.url}>
                    <img className="books-book-image" src={bookDetail.coverImage} alt={bookDetail.title}></img>
                    <h4 className="books-title">{bookDetail.title}</h4>
                    {(this.state.filter === "compilation") ? <p className="books-comp-info">{bookDetail.author}<br />With art by multiple illustrators<br /><br /> <i>{bookDetail.italic}</i><br/> {bookDetail.postText}</p> : null}
                    </Link>
                  </div>}
                    </>
                    
                  )
                })}
            </div> : null}

            {(this.state.selection === "off" && this.state.special === "on") ?
            
            <div  className="books-center-div">
              <div onClick={()=>this.handleReturnSpecial()} className="horiz-tile cursor">
                      <img className="square" src="https://www.patcummings.com/images/back.jpg"></img>
                      <h4 className="h-title">Back</h4> 
              </div>
                
              {(this.state.filter === 'chrono') ?
                <>
                {BooksFiltered.sort((a, b) => (a.year < b.year) ? 1 : -1).map((bookDetail, index) => {
                  return(
                    <>
                    {(bookDetail.url === "none") ? <div className="horiz-tile">
                    
                    <img className="square" src={bookDetail.coverImage} alt={bookDetail.title}></img>
                    <div className="for-comp-info"><h4 className="h-title">{bookDetail.title}    ({bookDetail.year})</h4>
                    {(bookDetail.category === "compilation") ? <p className="h-info">{bookDetail.author}{bookDetail.comma} With art by multiple illustrators, <i>{bookDetail.italic}</i> {bookDetail.postText}</p> : null }
                    </div>
              
                  </div>
                  
                  : 
                    
                    <Link to={"/" + bookDetail.url}>
                    <div className="horiz-tile cursor">
                    
                      <img className="square" src={bookDetail.coverImage} alt={bookDetail.title}></img>
                      <div className="for-comp-info">
                      <h4 className="h-title">{bookDetail.title}    ({bookDetail.year})</h4>
                      {(bookDetail.category === "compilation") ? <p className="h-info">{bookDetail.author}{bookDetail.comma} With art by multiple illustrators, <i>{bookDetail.italic}</i> {bookDetail.postText}</p> : null }
                      </div>
                    </div>
                    </Link> }
                    </>
                    )
                })} </> : null }

              {(this.state.filter === 'alpha') ?
                <>
              {BooksFiltered.sort((a, b) => (a.title < b.title) ? -1 : 1).map((bookDetail, index) => {
                  return(
                    <>
                    {(bookDetail.url === 'none') ? <div className="horiz-tile">
                    
                    <img className="square" src={bookDetail.coverImage} alt={bookDetail.title}></img>
                    <div className="for-comp-info">
                    <h4 className="h-title">{bookDetail.title}</h4>
                    {(bookDetail.category === "compilation") ? <p className="h-info">{bookDetail.author}{bookDetail.comma} With art by multiple illustrators,  <i>{bookDetail.italic}</i> {bookDetail.postText}</p> : null}</div>
                  </div>
                  
                  : 
                    
                    <Link to={"/" + bookDetail.url}>
                    <div className="horiz-tile cursor">
                    
                      <img className="square" src={bookDetail.coverImage} alt={bookDetail.title}></img>
                      <div className="for-comp-info">
                      <h4 className="h-title">{bookDetail.title}</h4>
                      {(bookDetail.category === "compilation") ? <p className="h-info">{bookDetail.author}{bookDetail.comma} With art by multiple illustrators,  <i>{bookDetail.italic}</i> {bookDetail.postText}</p> : null}</div>
                    </div>
                  </Link> }
                    </>
                  )
                })} </> : null }

            </div> : null}

            

    </div>

  );
      }
}

export default Books;