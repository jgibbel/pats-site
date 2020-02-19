import React from 'react';
import './index.css';

function FAQ() {

  const questions = [["Do you have pets?", "Not anymore. Cash was 21 years old when she left us. She's touring with the road company of CATS, I think. Occasionally, she sends us emails of herself in different costumes and it's always nice to hear from her."],["How long have you been making pictures and writing books?","I ALWAYS drew. Everybody draws when they're little, I just never stopped. My parents, even my grandparents, always kept me supplied with drawing materials. I was lucky to have had teachers who encouraged drawing, too. In fifth grade, I had a teacher who was a professional artist. Seeing his work up close and knowing that he sold it made me realize thatt you could do what you love and get paid for it."],["Are you married? ",
  "My husband's name is Chuku Lee. He's a real estate appraiser. I used his name for the main character in C.L.O.U.D.S. and sometimes he poses for people in the books. He was the painter in Jimmy Lee Did It, the father in Willie's Not the Hugging Kind and the chief in Ananse and the Lizard. He calls himself the\"unpaid model\"."],
  ["What do you do in your spare time? ",
  "I read, sleep, exercise, go to movies or see friends. My husband and I like to travel a lot but we always take our work with us. I worked on Clean Your Room, Harvey Moon in the Bahamas and Lulu's Birthday in France. Making books is fun, so if I'm not working, I'm usually thinking about it!"],
  ["How do you get the idea of looking downward?",
  "I sometimes have stupendous flying dreams and I always wake up feeling disappointed that I can't actually fly. So I decided to include a picture in each book that would bring back that sensation of flying for me. It reminds me of some pretty amazing dreams when I work on those pages."],
  ["Where do you live? ",
  "We live in a loft in beautiful, downtown Brooklyn, NY on one of the few cobblestone streets left in the city. If I look out my back window I can see the statue of Liberty and from the window near my desk I can see downtown Manhatttan. It is a great spot to be in on the 4th of July when fireworks are going off. "],
  ["When did you first start illustratting?",
  "I ALWAYS drew. Everybody draws when they're little, I just never stopped. My parents, even my grandparents, always kept me supplied with drawing materials. I was lucky to have had teachers who encouraged drawing, too. In fifth grade, I had a teacher who was a professional artist. Seeing his work up close and knowing that he sold it made me realize thatt you could do what you love and get paid for it."],
  ["Do you have kids? Yes or no, circle any one. ",
  "No. But I have three nieces who I see often. They are all artistic and have all helped me with making my books in one way or another."],
  ["Where do you get your ideas from?",
  "I get ideas from the same place everyone else does: things that happen, stories I hear, words people say. I'll get snippets of ideas from dreams, from memories, from songs or news headlines or other books I've read. It helps that I come from a very funny family. I always have more stories in my head about them than I will ever have time to tell. My stories usually start when I hear or see something that makes me wonder\"What if?\" Before I know it, a story is brewing."],
  ["What kind of crayons or markers or paints do you use and which do you don't use?",
  "I use watercolor, gouache, and pencil most of the time. I've also used acrylic and oil paints, pastels, and even collage. Now, I'm planning to do a completely digital book."],
  ["What was your first book? ",
  "Good News was the first book I ever illustrated. It was about a boy who was excited about learning to read his first words. I had no idea how to begin so I called Tom Feelings, an illustrator whose books I admired. Even though he didn't know me he showed me how he put a book together and gave me lots of helpful tips. I was really grateful, but he said, \"You don't have to thank me, just help someone else when they need it.\" I ended up learning a lesson from him that was more valuable than I realized."], ["When did you start writing?","There were things I wanted to draw and I realized I couldn't wait for someone else to write a story about them so I wrote my own. Plus, a lot of things that happened when I was a kid were pretty funny and I thought they'd make great stories to illustrate. "]]

  return (
    <div className="FAQ" class="faq-center-div">
      <div className="goodie-box">
        <div className="goodie-div">
          <div className="icon"></div>
          <p>Bookmarks</p>
        </div>
        <div className="goodie-div"> <div className="icon"></div>
          <p>Coloring Pages</p>
          </div>
       
      </div>
      
        {questions.map((arr, idx) => {return(
          <div className="q">
            <img className="faq-img" src={`../images/question-${idx+1}.png`}></img>
        <p>{arr[0]}</p>
        <p>{arr[1]}</p>
          </div>
        )}) }
    </div>
  );
}

export default FAQ;