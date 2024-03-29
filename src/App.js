import Button from './components/Button';
import Header from './components/Header';

import React, { useState } from 'react';

import watchOne from './imgs/watchOne.png';
import watchTwo from './imgs/watchTwo.png';
import watchThree from './imgs/watchThree.png';


function App() {

  const descriptionOne = 'Indulge in our sleek wristwatch, featuring a minimalist dial and genuine leather strap. Perfect for everyday wear or special occasions, this timepiece blends style and functionality effortlessly.';
  const descriptionTwo = 'Explore our collection of high-performance sports watches, designed to keep up with your active lifestyle. With water resistance and precise chronograph functionality, these watches are ideal for outdoor adventures.';
  const descriptionThree = 'Appreciate the timeless sophistication of our luxury timepieces, boasting intricate details and impeccable finishing. Crafted with premium materials and Swiss movement, each watch is a masterpiece of precision and elegance.';
  
  const [isTheModel, setIsTheModel] = useState(1);
  const [isTheDescription, setIsTheDescription] = useState(descriptionOne);
  const [isTheImg, setIsTheImg] = useState(watchOne);
  const [isTheTitle, setIsTheTitle] = useState('What time is it?');
  const [isTheSubtitle, setIsTheSubtitle] = useState('answer it better');

  const [isTheColorOne, setIsTheColorOne] = useState('w-[0.625rem] h-[0.625rem] bg-hoverColor rounded-full cursor-default lg:w-[0.9rem] lg:h-[0.9rem]');
  const [isTheColorTwo, setIsTheColorTwo] = useState('w-[0.625rem] h-[0.625rem] bg-textColor rounded-full cursor-pointer hover:bg-hoverColor lg:w-[0.9rem] lg:h-[0.9rem]');
  const [isTheColorThree, setIsTheColorThree] = useState('w-[0.625rem] h-[0.625rem] bg-textColor rounded-full cursor-pointer hover:bg-hoverColor lg:w-[0.9rem] lg:h-[0.9rem]');

  const [descriptionAnimate, setDescriptionAnimate] = useState('flex flex-col items-center gap-2 pt-8 lg:col-start-2 lg:col-end-3 animate-appear');
  const [titleAnimate, setTitleAnimate] = useState('flex flex-col items-center animate-appear');
  const [imgAnimate, setImgAnimate] = useState('w-1/2 lg:w-3/4');

  const watchesArray = { 
    'img': ['', watchOne, watchTwo, watchThree],
    'description': ['', descriptionOne, descriptionTwo, descriptionThree],
    'title': ['', 'What time is it?', 'This is real time', 'The time has never'],
    'subtitle': ['', 'answer it better', 'closer from you', 'been more attractive'],
    'colorBtn': ['', isTheColorOne, isTheColorTwo, isTheColorThree],
    'setColorBtn': ['', setIsTheColorOne, setIsTheColorTwo, setIsTheColorThree]
  };
  

  const changeModel = (model) => {

    setDescriptionAnimate('flex flex-col items-center gap-2 pt-8 lg:col-start-2 lg:col-end-3 animate-disappear');
    setTitleAnimate('flex flex-col items-center gap-1 animate-disappear');
    setImgAnimate('w-1/2 lg:w-3/4 animate-slideOut');


    setTimeout(() => {

      setIsTheImg(watchesArray.img[model]);

    }, 1900);

    setTimeout(() => {

      setImgAnimate('w-1/2 lg:w-3/4 animate-slideIn');

    }, 2000);

    setTimeout(() => {

      setIsTheModel(model);
      setIsTheDescription(watchesArray.description[model]);
      setIsTheTitle(watchesArray.title[model]);
      setIsTheSubtitle(watchesArray.subtitle[model]);

      setDescriptionAnimate('flex flex-col items-center gap-2 pt-8 lg:col-start-2 lg:col-end-3 animate-appear');
      setTitleAnimate('flex flex-col items-center gap-1 animate-appear');

    }, 3000);

    
    if (watchesArray.colorBtn[model] !== 'w-[0.625rem] h-[0.625rem] bg-hoverColor rounded-full cursor-default hover:bg-hoverColor lg:w-[0.9rem] lg:h-[0.9rem]') watchesArray.setColorBtn[model]('w-[0.625rem] h-[0.625rem] bg-hoverColor rounded-full cursor-default hover:bg-hoverColor lg:w-[0.9rem] lg:h-[0.9rem]');

    watchesArray.setColorBtn.splice(model, 1);

    watchesArray.setColorBtn[1]('w-[0.625rem] h-[0.625rem] bg-textColor rounded-full cursor-pointer hover:bg-hoverColor lg:w-[0.9rem] lg:h-[0.9rem]');
    watchesArray.setColorBtn[2]('w-[0.625rem] h-[0.625rem] bg-textColor rounded-full cursor-pointer hover:bg-hoverColor lg:w-[0.9rem] lg:h-[0.9rem]');

  }

  return (
    <div className="font-principal font-light text-textColor bg-bgColor pb-14 relative h-screen flex flex-col justify-center">
      <Header/>
      <main className="flex flex-col items-center gap-7 after:content-[''] after:absolute after:bottom-[1.2rem] after:w-4/5 after:h-[0.05rem] after:bg-textColor lg:grid lg:grid-cols-[0.2fr_1.3fr_1fr_0.8fr_0.5fr] lg:gap-0 lg:after:right-0 lg:after:left-0 after:my-0 after:mx-auto after:animate-appear">
        <section className={descriptionAnimate}>
          <h2 className='text-xl font-secundary w-2/3 lg:text-xxl'>O’CLOCK {isTheModel}</h2>
          <article className='text-base w-2/3 text-justify lg:text-lg'>{isTheDescription}</article>
        </section>
        <section className='flex flex-col items-center gap-2 lg:gap-5 animate-appearImg opacity-0'>
          <img src={isTheImg} alt='' className={imgAnimate}/>
          <div className='flex flex-row gap-3 lg:gap-7'>
            <button onClick={() => changeModel(1)} className={isTheColorOne}></button>
            <button onClick={() => changeModel(2)} className={isTheColorTwo}></button>
            <button onClick={() =>changeModel(3)} className={isTheColorThree}></button>
          </div>
        </section>
        <section className={titleAnimate}>
          <h2 className='text-lg lg:text-xl'>{isTheTitle}</h2>
          <h3 className='font-secundary text-base pb-5 lg:text-lg'>{isTheSubtitle}</h3>
          <Button/>
        </section>
      </main>
    </div>
  );
}

export default App; 
