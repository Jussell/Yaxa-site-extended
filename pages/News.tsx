import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    title: "Insatiable Curiosity",
    description: "Tireless pursuit of opportunities and ideas that shape tomorrow, combining boldness and wisdom to achieve excellence.",
    image: "https://picsum.photos/seed/curiosity/400/500?grayscale"
  },
  {
    title: "Insatiable Curiosity",
    description: "Tireless pursuit of opportunities and ideas that shape tomorrow, combining boldness and wisdom to achieve excellence.",
    image: "https://picsum.photos/seed/curiosity2/400/500?grayscale"
  },
  {
    title: "Insatiable Curiosity",
    description: "Tireless pursuit of opportunities and ideas that shape tomorrow, combining boldness and wisdom to achieve excellence.",
    image: "https://picsum.photos/seed/curiosity3/400/500?grayscale"
  },
  {
    title: "Insatiable Curiosity",
    description: "Tireless pursuit of opportunities and ideas that shape tomorrow, combining boldness and wisdom to achieve excellence.",
    image: "https://picsum.photos/seed/curiosity4/400/500?grayscale"
  },
  {
    title: "Insatiable Curiosity",
    description: "Tireless pursuit of opportunities and ideas that shape tomorrow, combining boldness and wisdom to achieve excellence.",
    image: "https://picsum.photos/seed/curiosity5/400/500?grayscale"
  },
  {
    title: "Insatiable Curiosity",
    description: "Tireless pursuit of opportunities and ideas that shape tomorrow, combining boldness and wisdom to achieve excellence.",
    image: "https://picsum.photos/seed/curiosity6/400/500?grayscale"
  },
  {
    title: "Insatiable Curiosity",
    description: "Tireless pursuit of opportunities and ideas that shape tomorrow, combining boldness and wisdom to achieve excellence.",
    image: "https://picsum.photos/seed/curiosity7/400/500?grayscale"
  },
  {
    title: "Insatiable Curiosity",
    description: "Tireless pursuit of opportunities and ideas that shape tomorrow, combining boldness and wisdom to achieve excellence.",
    image: "https://picsum.photos/seed/curiosity8/400/500?grayscale"
  },
  {
    title: "Insatiable Curiosity",
    description: "Tireless pursuit of opportunities and ideas that shape tomorrow, combining boldness and wisdom to achieve excellence.",
    image: "https://picsum.photos/seed/curiosity9/400/500?grayscale"
  }
];

const NewsItem = ({ item, index }: { item: typeof newsItems[0], index: number }) => (
  <div className="flex flex-col h-full group">
    <h3 className="text-sm font-normal mb-3">{item.title}</h3>
    <p className="text-xs text-gray-800 font-light leading-relaxed mb-4">
      {item.description}
    </p>
    <Link to={`/news/${index}`} className="text-xs font-medium uppercase tracking-widest text-black mb-6 hover:text-gray-500 transition-colors">
      Read more
    </Link>
    <div className="aspect-[4/5] bg-gray-200 mt-auto overflow-hidden">
      <img 
        src={item.image} 
        alt={item.title}
        className="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
      />
    </div>
  </div>
);

const News: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-4 gap-x-12 gap-y-20">
          
          {/* Row 1 */}
          <div className="col-span-1">
            <ScrollReveal>
              <h1 className="text-[56px] font-thin mb-6 text-gray-900 tracking-tight leading-none">News</h1>
              <p className="text-gray-800 font-light text-xs leading-relaxed pr-4">
                We have a unique culture because, throughout our history, we have been guided by a family with strong and solid values that have been passed down from generation to generation. These values define how we carry out our activities:
              </p>
            </ScrollReveal>
          </div>
          <div className="col-span-3">
            <ScrollReveal>
              <h2 className="text-[40px] font-thin mb-10 text-gray-900 tracking-tight leading-none">Recent</h2>
            </ScrollReveal>
            <div className="grid grid-cols-3 gap-x-8">
              {newsItems.slice(0, 3).map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <NewsItem item={item} index={index} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="col-span-1">
            <ScrollReveal>
              <h2 className="text-[40px] font-thin text-gray-900 tracking-tight leading-none">More News</h2>
            </ScrollReveal>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-x-8">
              {newsItems.slice(3, 6).map((item, index) => (
                <ScrollReveal key={index + 3} delay={index * 0.1}>
                  <NewsItem item={item} index={index + 3} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Row 3 */}
          <div className="col-span-1"></div>
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-x-8">
              {newsItems.slice(6, 9).map((item, index) => (
                <ScrollReveal key={index + 6} delay={index * 0.1}>
                  <NewsItem item={item} index={index + 6} />
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <ScrollReveal>
            <h1 className="text-[56px] font-thin mb-6 text-gray-900 tracking-tight leading-none">News</h1>
            <p className="text-gray-800 font-light text-sm leading-relaxed mb-12">
              We have a unique culture because, throughout our history, we have been guided by a family with strong and solid values that have been passed down from generation to generation. These values define how we carry out our activities:
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-8">
            {newsItems.slice(0, 4).map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex gap-6">
                  <div className="w-[45%] aspect-[4/5] bg-gray-200 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover opacity-80 mix-blend-multiply"
                    />
                  </div>
                  <div className="w-[55%] flex flex-col justify-start pt-1">
                    <h3 className="text-lg font-normal mb-4">{item.title}</h3>
                    <p className="text-sm font-light text-gray-800 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <Link to={`/news/${index}`} className="text-xs font-medium uppercase tracking-widest text-black mt-auto hover:text-gray-500 transition-colors">
                      Read more
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-24 flex justify-center items-center gap-6">
          <span className="text-4xl font-light text-black">1</span>
          <span className="text-4xl font-thin text-gray-400">2</span>
          <span className="text-4xl font-thin text-gray-400">3</span>
          <span className="text-sm font-light text-gray-800 ml-2">Siguiente</span>
        </div>

      </div>
    </div>
  );
};

export default News;
