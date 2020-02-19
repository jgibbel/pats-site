import React from 'react';
import './index.css';
import bookData from './books.json'
import Carousel from './Carousel'
import backButton from './back-arrow.svg'
import {
  useParams
} from "react-router-dom";

function Show() {
  let {url} = useParams();
  let thisBook = bookData.find((book) => book.url === url)
    return (
      <>
      {/* <div className="book-back"><img className="show-svg" src={backButton} alt="Previous"/></div> */}
       
        <div className="show-page-grid">

            <div className="show-title"> <h1>{thisBook.title}</h1></div>

            <img className="show-image" src={thisBook.coverImage} alt={thisBook.title}/>
                    
            <div className="show-description">
                
                {(thisBook.author) ? <h4> {thisBook.author}</h4> :  null}

                {thisBook.description.split('\n').map((item, key) => {
                return <span key={key}>{item}<br/></span>
                })}
                <h4 className="publisher">{thisBook.publisher} {thisBook.year}</h4>
            </div>

            <div className="show-slideshow">
                {(thisBook.images) ? <Carousel images={thisBook.images} /> : null}
            </div>

            <div className="show-reviews">
                {(thisBook.reviews) ? 
                  <div className="reviews">
                    <h2>Reviews</h2>
                  {thisBook.reviews.map((review) => {
                    return(
                      <div>
                        <p>"{review.text}"</p>
                        <p>— {review.author}</p>
                      </div>)
                    })}
                    </div>
                  : null }
            </div>

            <div className="show-bookmarks"> 
                {(thisBook.links) ? 
                    
                    <div className="links-container">
                      <h2>Purchase Online</h2>
                        {thisBook.links.map((obj) => {
                          return(
                            <div className="links">
                              <a href={obj.link}><p>{obj.seller}</p></a>
                            </div>)
                            })}
                    </div> 
                      
                      :  null}

                {(thisBook.bookmarks) ? 
                    
                  <div className="bookmarks-container">
                    <h2>Bookmarks</h2>
                      {thisBook.bookmarks.map((src) => {
                        return(
                          <div className="bookmarks">
                              <img src={src} alt="bookmark" width="70%" />
                          </div>)
                          })}
                  </div> 
                   
                    :  null}
             

              </div>
        </div>
              
        </>
        );
}

export default Show;














