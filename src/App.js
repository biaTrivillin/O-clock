// import './App.css';
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
    <div className="font-principal font-light text-textColor bg-bgColor pb-11">
      <Header/>
      <main className='flex flex-col items-center gap-7'>
        <section className='flex flex-col items-center gap-2 pt-8'>
          <h2 className='text-xl font-secundary w-2/3'>O’CLOCK {isTheModel}</h2>
          <article className='text-base w-2/3 text-justify'>{isTheDescription}</article>
        </section>
        <section className='flex flex-col items-center gap-2'>
          <img src={isTheImg} alt='' className='w-1/2'/>
          <div className='flex flex-row gap-3'>
            <button onClick={() => changeModel(1)} className='w-[0.625rem] h-[0.625rem] bg-textColor rounded-full cursor-pointer hover:bg-hoverColor'></button>
            <button onClick={() => changeModel(2)} className='w-[0.625rem] h-[0.625rem] bg-textColor rounded-full cursor-pointer hover:bg-hoverColor'></button>
            <button onClick={() =>changeModel(3)} className='w-[0.625rem] h-[0.625rem] bg-textColor rounded-full cursor-pointer hover:bg-hoverColor'></button>
          </div>
        </section>
        <section className='flex flex-col items-center gap-1'>
          <h2 className='text-lg'>{isTheTitle}</h2>
          <h3 className='font-secundary text-base pb-5'>{isTheSubtitle}</h3>
          <Button/>
        </section>
      </main>
    </div>
  );
}

export default App; 
