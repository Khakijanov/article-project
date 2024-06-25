import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import './article.css'

function ArticlesDetailes() {
  const { id } = useParams();
  const url = 'https://online-json-server-api.up.railway.app/project/66794a821d2cd3eb114409d0/articles/' + id;
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    if (data) {
      console.log('Full data object:', data);
      console.log('Title:', data.title);
    }
  }, [data]);

  // carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    
  ];
  if(data){
    data.thumbnail.forEach((img)=>{
        slides.push(img)
    })
  }


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Har 3 soniyada surat almashadi

    return () => clearInterval(interval); // Tozalash
  }, [slides.length]);

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div>
      {loading && <h2>loading...</h2>}
      {error && <h2>Not Found</h2>}
      {data && (
        <>
        <div className="relative w-1/2 m-auto overflow-hidden bg-indigo-500 shadow-lg shadow-indigo-500/50">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full m-auto flex-shrink-0 h-80">
                <img 
                  src={slide} 
                  className="w-full h-full " 
                  alt={`Slide ${index + 1}`} 
                  loading="lazy"  // Lazy loading uchun
                />
              </div>
            ))}
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            
          </div>
        </div>
        <div>
            <h1 className={'text-center text-[40px] text-blue-500 mt-20 mb-10  '}>Collize</h1>
            <div className={'flex justify-between gap-12'}>
            <div className={'w-1/2 relative rounded-lg overflow-hidden '}>
                <img src={data.thumbnail[0]} className={' w-full '} alt="" />
                <div className={'absolute top-0 left-0 w-full bottom-0 bg-black bg-opacity-50 z-10 '}> <a href='https://youtu.be/FlRwssZYRM0?si=PKf9Hu34vfYsl9fm' className={'text-white text-[25px] px-6 py-[14px] rounded-full bg-red-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '}> <div class="absolute inset-0 m-auto w-16 h-16 rounded-full border-4 border-red-700 animate-pulse-border"></div> > </a> </div>
            </div>
            <div className={'w-1/2 flex flex-col  relative'}>
            <h1 className={' text-3xl font-bold text-orange-600 mb-4'}>{data.kolizeyTitle}</h1>
                <p className={'text-gray-500'}>{data.kolizey}</p>
              <div className=''>
              <a href="#" className={'btn btn-primary absolute right-0 bottom-0'}>watch video</a>
              </div>
            </div>
            </div>
        </div>
        </>
        
      )}
    </div>
  );
}

export default ArticlesDetailes;
