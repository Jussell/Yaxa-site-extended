import React, { useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TOTAL_ARTICLES = 9;

const NewsArticle: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const desktopCarouselRef = useRef<HTMLDivElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);
  
  const currentId = parseInt(id || '0', 10);
  
  const handlePrev = () => {
    const prevId = currentId > 0 ? currentId - 1 : TOTAL_ARTICLES - 1;
    navigate(`/news/${prevId}`);
  };

  const handleNext = () => {
    const nextId = currentId < TOTAL_ARTICLES - 1 ? currentId + 1 : 0;
    navigate(`/news/${nextId}`);
  };

  const scrollDesktop = (direction: 'left' | 'right') => {
    if (desktopCarouselRef.current) {
      const scrollAmount = desktopCarouselRef.current.clientWidth / 4;
      desktopCarouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollMobile = (direction: 'left' | 'right') => {
    if (mobileCarouselRef.current) {
      const scrollAmount = mobileCarouselRef.current.clientWidth * 0.85;
      mobileCarouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="pt-32 pb-24">
      {/* Desktop Layout */}
      <div className="hidden md:block max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center mb-12">
          <Link to="/news" className="text-xs font-medium uppercase tracking-widest text-black hover:text-gray-500 transition-colors">
            Back
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-[56px] font-thin mb-4 text-gray-900 tracking-tight leading-none">Insatiable Curiosity {currentId + 1}</h1>
          <p className="text-sm font-light text-gray-500">March 17, 2025</p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="aspect-[21/9] bg-gray-200">
            <img src={`https://picsum.photos/seed/curiosity${currentId}/1200/500?grayscale`} alt="Article" className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
          </div>
          <button onClick={handlePrev} className="absolute left-0 bottom-0 bg-gray-50 p-6 transform -translate-x-1/2 translate-y-1/2 shadow-sm hover:bg-gray-100 transition-colors">
            <ArrowLeft size={32} strokeWidth={1} />
          </button>
          <button onClick={handleNext} className="absolute right-0 bottom-0 bg-gray-50 p-6 transform translate-x-1/2 translate-y-1/2 shadow-sm hover:bg-gray-100 transition-colors">
            <ArrowRight size={32} strokeWidth={1} />
          </button>
        </div>

        <div className="max-w-3xl mx-auto mb-32">
          <p className="text-sm font-light text-gray-800 leading-relaxed text-center space-y-6">
            We have a unique culture because, throughout our history, we have been guided by a family with strong and solid values that have been passed down from generation to generation. These values define how we carry out our activities:We have a unique culture because, throughout our history, we have been guided by a family with strong and solid values that have been passed down from generation to generation. These values define how we carry out our activities:We have a unique culture because, throughout our history, we have been guided by a family with strong and solid values that have been passed down from generation to generation. These values define how we carry out our activities:<br/><br/>
            We have a unique culture because, throughout our history, we have been guided by a family with strong and solid values that have been passed down from generation to generation. These values define how we carry out our activities:We have a unique culture because, throughout our history, we have been guided by a family with strong and solid values that have been passed down from generation to generation. These values define how we carry out our activities:We have a unique culture because, throughout our history, we have been guided by a family with strong and solid values that have been passed down from generation to generation. These values define how we carry out our activities:
          </p>
        </div>

        <div>
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-[40px] font-thin text-gray-900 tracking-tight leading-none">More News</h2>
            <div className="flex gap-4">
              <button onClick={() => scrollDesktop('left')} className="bg-gray-50 p-4 hover:bg-gray-100 transition-colors">
                <ArrowLeft size={24} strokeWidth={1} />
              </button>
              <button onClick={() => scrollDesktop('right')} className="bg-gray-50 p-4 hover:bg-gray-100 transition-colors">
                <ArrowRight size={24} strokeWidth={1} />
              </button>
            </div>
          </div>
          
          <div ref={desktopCarouselRef} className="flex gap-x-8 overflow-x-auto snap-x hide-scrollbar pb-4">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={index} className="flex-shrink-0 w-[calc(25%-1.5rem)] snap-start flex flex-col h-full group">
                <h3 className="text-sm font-normal mb-3">Insatiable Curiosity</h3>
                <p className="text-xs text-gray-800 font-light leading-relaxed mb-6">
                  Tireless pursuit of opportunities and ideas that shape tomorrow, combining boldness and wisdom to achieve excellence.
                </p>
                <div className="aspect-[4/5] bg-gray-200 mt-auto overflow-hidden">
                  <img src={`https://picsum.photos/seed/curiosity${index+2}/400/500?grayscale`} alt="More news" className="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-6">
        <div className="text-center mb-12">
          <Link to="/news" className="text-sm font-medium text-gray-800 hover:text-gray-500 transition-colors block mb-8">
            Back to news
          </Link>
          <h1 className="text-[48px] font-thin mb-4 text-gray-900 tracking-tight leading-none">Insatiable Curiosity {currentId + 1}</h1>
          <p className="text-sm font-light text-gray-500">March 17, 2025</p>
        </div>

        <div className="relative w-full mb-8">
          <div className="aspect-[4/5] bg-gray-200">
            <img src={`https://picsum.photos/seed/curiosity${currentId}/800/1000?grayscale`} alt="Article" className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
          </div>
        </div>
        
        <div className="flex gap-4 mb-12">
          <button onClick={handlePrev} className="bg-gray-50 p-4 hover:bg-gray-100 transition-colors">
            <ArrowLeft size={24} strokeWidth={1} />
          </button>
          <button onClick={handleNext} className="bg-gray-50 p-4 hover:bg-gray-100 transition-colors">
            <ArrowRight size={24} strokeWidth={1} />
          </button>
        </div>

        <div className="mb-24">
          <p className="text-sm font-light text-gray-800 leading-relaxed text-center space-y-6">
            We have a unique culture because, throughout our history, we have been guided by a family with strong and solid values that have been passed down from generation to generation. These values define how we carry out our activities:We have a unique culture because, throughout our history, we have been guided by a family with strong and solid values that have been passed down from generation to generation. These values define how we carry out our activities:We have a unique culture because, throughout our history, we have been guided by a family with strong and solid values that have been passed down from generation to generation. These values define how we carry out our activities:<br/><br/>
            We have a unique culture because, throughout our history, we have been guided by a family with strong and solid values that have been passed down from generation to generation. These values define how we carry out our activities:We have a unique culture because, throughout our history, we have been guided by a family with strong and solid values that have been passed down from generation to generation. These values define how we carry out our activities:We have a unique culture because, throughout our history, we have been guided by a family with strong and solid values that have been passed down from generation to generation. These values define how we carry out our activities:
          </p>
        </div>

        <div>
          <h2 className="text-[48px] font-thin text-gray-900 tracking-tight leading-none mb-8">More news</h2>
          <div className="flex gap-4 mb-8">
            <button onClick={() => scrollMobile('left')} className="bg-gray-50 p-4 hover:bg-gray-100 transition-colors">
              <ArrowLeft size={24} strokeWidth={1} />
            </button>
            <button onClick={() => scrollMobile('right')} className="bg-gray-50 p-4 hover:bg-gray-100 transition-colors">
              <ArrowRight size={24} strokeWidth={1} />
            </button>
          </div>
          
          <div ref={mobileCarouselRef} className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div key={index} className="flex-shrink-0 w-[85%] snap-center flex gap-6">
                <div className="w-1/2 aspect-[4/5] bg-gray-200">
                  <img src={`https://picsum.photos/seed/curiosity${index+2}/400/500?grayscale`} alt="More news" className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
                </div>
                <div className="w-1/2 flex flex-col justify-start pt-1">
                  <h3 className="text-lg font-normal mb-4">Insatiable Curiosity</h3>
                  <p className="text-sm font-light text-gray-800 leading-relaxed">
                    Tireless pursuit of opportunities and ideas that shape tomorrow, combining boldness and wisdom to achieve excellence.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
