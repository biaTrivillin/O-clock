import './App.css';
import Button from './components/Button';
import Header from './components/Header';

import React, { useState } from 'react';

import watchOne from './imgs/watchOne.png'
import watchTwo from './imgs/watchTwo.png'
import watchThree from './imgs/watchThree.png'


function App() {

  const descriptionOne = 'Indulge in our sleek wristwatch, featuring a minimalist dial and genuine leather strap. Perfect for everyday wear or special occasions, this timepiece blends style and functionality effortlessly.'

  const descriptionTwo = 'Explore our collection of high-performance sports watches, designed to keep up with your active lifestyle. With water resistance and precise chronograph functionality, these watches are ideal for outdoor adventures.'

  const descriptionThree = 'Appreciate the timeless sophistication of our luxury timepieces, boasting intricate details and impeccable finishing. Crafted with premium materials and Swiss movement, each watch is a masterpiece of precision and elegance.'
  
  const [isTheModel, setIsTheModel] = useState(1);

  const [isTheDescription, setIsTheDescription] = useState(descriptionOne);
  const [isTheImg, setIsTheImg] = useState(watchOne);
  const [isTheTitle, setIsTheTitle] = useState('What time is it?');
  const [isTheSubtitle, setIsTheSubtitle] = useState('answer it better');

  const watchesArray = { 
    'img': ['', watchOne, watchTwo, watchThree],
    'description': ['', descriptionOne, descriptionTwo, descriptionThree],
    'title': ['', 'What time is it?', 'This is real time', 'The time has never'],
    'subtitle': ['', 'answer it better', 'closer from you', 'been more attractive']
  }
  

  const changeModel = (model) => {
    console.log(isTheDescription)

    setIsTheModel(model);

    setIsTheDescription(watchesArray.description[model])
    setIsTheImg(watchesArray.img[model])
    setIsTheTitle(watchesArray.title[model])
    setIsTheSubtitle(watchesArray.subtitle[model])

  }

  return (
    <div className="App">
      <Header/>
      <section>
        <h2>{isTheTitle}</h2>
        <h3>{isTheSubtitle}</h3>
        <Button/>
      </section>
      <section>
        <h2>O’CLOCK {isTheModel}</h2>
        <article>{isTheDescription}</article>
      </section>
      <section>
        <img src={isTheImg} alt=''/>
        <button onClick={() => changeModel(1)}></button>
        <button onClick={() => changeModel(2)}></button>
        <button onClick={() =>changeModel(3)}></button>
      </section>
    </div>
  );
}

export default App; 
