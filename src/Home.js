import React from 'react';
import './index.css';

import uc from '../images/uc-main.png';
import ucKids from '../images/uc-kids.png';

export default class Home extends React.Component {

  state = {
    isOpen: false,
    imageIdx: 0
  }

  clickToPopup = (idx) => {
    this.setState({
      isOpen: true,
      imageIdx: idx
    });
    window.scrollTo(0,0);
  }

  clickToClose = () => {
    this.setState({
      isOpen: false
    })
  }


render() {
  const { imageIdx, isOpen } = this.state;

  const images = [`../images/willie-image1.jpg`, 'y', 'z','y', 'z','y', 'z','y', 'z','y', 'z']
  const cards = images.map( (bookObj, idx) => { 
    return(
      <div className="overlay" onClick={() => this.clickToPopup(idx)} > 
        <img class="home-image" src={`../images/willie-image1.jpg`} alt={'willie'} />
      </div>
    )})

  return (
          <div className="Archive">

              {/* {isOpen && (<><div className="image-popup" onClick={this.clickToClose}></div>
              <img className="highlight-image" src={images[imageIdx]} alt={'willie'} onClick={this.clickToClose} /></>)}

              <section class="card-container">
                  {cards}
              </section> */}
          <img className="uc" src={uc} />
          <img id="pot" className="kids" src={ucKids} />
          </div>

      )
  }
}

{/* <div className="banner">
<h2>Latest Release</h2>
</div>

<div className="second-row">

<img className="image-home" src="../images/where-is-mommy-cover.jpg" alt="Where is Mommy?"/>


<div className="text-home">
  <h2>Where is Mommy?</h2>
  <p className="">A girl, her mother, and their cat are snuggled up on a couch with a book. The girl falls asleep and when wakes up to find that Mommy is gone. Clues are everywhere and, with the help of her cat, the girl follows each one to figure out just where to find her Mommy.</p>
  <p>Holiday House 2019</p>
</div>
</div>


<div className="third-row">
<p className="bio-text">Pat Cummings was born in Chicago but grew up traveling with her military family all over the world. She has been writing and illustrating children's books since she graduated from Pratt Institute and is the author and/or illustrator of more than forty books. In addition to her art for the Coretta Scott King Award winner My Mama Needs Me by Mildred Pitts Walter, Pat's luminous work includes Angel Baby; Clean Your Room, Harvey Moon!; and the Boston Globe-Horn Book Award winner Talking With Artists. She teaches children’s book illustration and writing at Parsons School of Design, the New School, and Pratt Institute. She lives in Brooklyn, New York.</p>
<img className="image-home" src="../images/bio_headshot.jpeg" alt="Pat Cummings" width="20%"></img>

</div> */}