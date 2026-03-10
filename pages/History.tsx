import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

interface Event {
  year: string;
  title: string;
  desc: string;
}

const events: Event[] = [
  { year: '2011', title: 'Foundation', desc: 'YAXA is founded with a vision to redefine luxury distribution in the region.' },
  { year: '2015', title: 'Retail Expansion', desc: 'Opened the first flagship store, marking the beginning of our direct-to-consumer strategy.' },
  { year: '2017', title: 'Global Partnerships', desc: 'Secured exclusive distribution rights for key European watchmakers.' },
  { year: '2020', title: 'Digital Transformation', desc: 'Launched integrated omnichannel platforms to serve customers during the global shift.' },
  { year: '2023', title: 'Sustainable Future', desc: 'Implemented green logistics and carbon-neutral operations across all warehouses.' },
];

const History: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-24">
        <ScrollReveal>
          <h1 className="text-5xl font-light mb-6">Our Journey</h1>
          <p className="text-gray-500 font-light text-lg">
            A legacy built on trust, innovation, and an unwavering commitment to excellence.
          </p>
        </ScrollReveal>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-6 relative mb-32">
        {/* Vertical Line - Desktop Only */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -ml-[0.5px]"></div>

        <div className="space-y-12 md:space-y-24">
          {events.map((event, index) => (
            <ScrollReveal key={index} width="100%">
              {/* Mobile Layout */}
              <div className="flex flex-col items-center text-center md:hidden">
                <p className="text-gray-800 font-light text-xs leading-relaxed mb-8 px-4">
                  {event.desc}
                </p>
                <div className="w-px h-20 bg-gray-400 mb-4"></div>
                <span className="text-3xl font-thin text-gray-400 mb-4">{event.year}</span>
                <div className="w-full max-w-[280px] aspect-[4/3] bg-[#F5F5F5]">
                  <img src={`https://picsum.photos/400/300?random=${index + 10}&grayscale`} alt={event.year} className="w-full h-full object-cover opacity-50" />
                </div>
              </div>

              {/* Desktop Layout */}
              <div className={`hidden md:flex relative flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content */}
                <div className="w-full md:w-[45%] md:text-center lg:text-left p-4 bg-white z-10">
                   <div className={`flex flex-col ${index % 2 !== 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                     <span className="text-6xl font-thin text-gray-200 mb-4">{event.year}</span>
                     <h3 className="text-xl font-normal mb-2">{event.title}</h3>
                     <p className="text-gray-500 font-light text-sm leading-relaxed">{event.desc}</p>
                   </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 w-3 h-3 bg-black rounded-full border-4 border-white transform -translate-x-1/2 z-20"></div>

                {/* Image Placeholder side */}
                <div className="w-full md:w-[45%]">
                  <div className="aspect-square bg-gray-50 overflow-hidden">
                     <img src={`https://picsum.photos/400/400?random=${index + 10}&grayscale`} alt="History" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* News Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
             <h2 className="text-3xl font-light">Recent News</h2>
             <a href="#" className="text-sm border-b border-black pb-1 hover:text-gray-600">View Archive</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <ScrollReveal key={item} delay={item * 0.1}>
                <div className="bg-white group cursor-pointer h-full">
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img src={`https://picsum.photos/500/300?random=${item + 20}&grayscale`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="News" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Corporate</span>
                    <h3 className="text-lg font-light mb-4 group-hover:text-gray-600 transition-colors">YAXA expands distribution network to three new territories in Asia.</h3>
                    <span className="text-xs text-black border-b border-black/20 pb-0.5">Read Article</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default History;