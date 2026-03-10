import React, { useRef, useEffect, useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import Button from '../components/Button';
import { ShoppingBag, ArrowRight, ArrowLeft, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, Variants, useScroll, useSpring, animate, useTransform, useInView } from 'framer-motion';

const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  return (
    <motion.span
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: "linear" }}
      className="inline-block"
    >
      {text}
    </motion.span>
  );
};

const ServiceBlock = ({ service, index, isLast }: { service: any, index: number, isLast: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={containerRef} className="w-full h-[100svh] relative flex flex-col bg-white overflow-hidden">
      {/* White Panel */}
      <div className="w-full flex-1 bg-white p-8 flex flex-col justify-center z-10">
        <h2 className="font-heading font-thin text-[80px] mb-16 text-primary-800 tracking-tight leading-none">
          {service.title}
        </h2>
        
        <div className="mb-16">
          <h3 className="text-base text-primary-800 font-normal mb-6">valor de marca</h3>
          <div className="space-y-4">
            {service.values.map((val: string, i: number) => (
              <p key={i} className="text-[#A3A3A3] font-light text-base">{val}</p>
            ))}
          </div>
        </div>

        <div>
          <Link to={service.link} className="text-primary-800 text-base font-normal hover:text-primary-500 transition-colors">
            Learn more
          </Link>
        </div>
      </div>

      {/* Gray/Image Panel */}
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: isInView ? "0%" : "100%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-[60vh] relative bg-[#A3A3A3] overflow-hidden z-20 shrink-0"
      >
        <motion.img 
          style={{ y: imageY, scale: 1.2 }}
          src={service.image} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply" 
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.6, delay: isInView ? 0.4 : 0 }}
          className="relative z-10 flex flex-col justify-center h-full p-8 max-w-md mx-auto"
        >
          <p className="text-white text-xs font-light leading-relaxed mb-6">
            {service.shortDesc}
          </p>
          <Link to="/contact">
            <button className="border border-white text-white px-6 py-2 text-xs font-light hover:bg-white hover:text-[#A3A3A3] transition-colors">
              Contact us
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Down Arrow Indicator between sections */}
      {!isLast && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
          <ArrowDown className="w-8 h-8 text-white animate-bounce" strokeWidth={1} />
        </div>
      )}
    </div>
  );
};

const DesktopServicesCarousel = ({ services }: { services: any[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: index * window.innerWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const index = Math.round(scrollLeft / window.innerWidth);
      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    }
  };

  return (
    <div className="relative w-full h-screen bg-white hidden md:block overflow-hidden">
      {/* Navigation Arrows */}
      <button 
        onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))}
        disabled={currentIndex === 0}
        className={`absolute left-0 bottom-24 z-50 w-24 h-24 bg-white/90 flex items-center justify-center transition-all duration-300 ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-white cursor-pointer'}`}
      >
        <ArrowLeft className="w-12 h-12 text-primary-800" strokeWidth={1} />
      </button>
      <button 
        onClick={() => scrollToIndex(Math.min(services.length - 1, currentIndex + 1))}
        disabled={currentIndex === services.length - 1}
        className={`absolute right-0 bottom-24 z-50 w-24 h-24 bg-white/90 flex items-center justify-center transition-all duration-300 ${currentIndex === services.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-white cursor-pointer'}`}
      >
        <ArrowRight className="w-12 h-12 text-primary-800" strokeWidth={1} />
      </button>

      {/* Carousel Track */}
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {services.map((service, index) => (
          <div key={service.id} className="w-screen h-full flex-shrink-0 snap-start flex">
            
            {/* Left Content */}
            <div className="w-1/3 h-full flex flex-col justify-center pl-32 pr-12">
              <h2 className="font-heading font-thin text-[120px] mb-24 text-primary-800 tracking-tight leading-none">
                {service.title}
              </h2>
              
              <div className="mb-24">
                <h3 className="text-base text-primary-800 font-normal mb-6">valor de marca</h3>
                <div className="space-y-4">
                  {service.values.map((val: string, i: number) => (
                    <p key={i} className="text-[#A3A3A3] font-light text-base">{val}</p>
                  ))}
                </div>
              </div>

              <div>
                <Link to={service.link} className="text-primary-800 text-base font-normal hover:text-primary-500 transition-colors">
                  Learn more
                </Link>
              </div>
            </div>

            {/* Right Image Panel */}
            <div className="w-2/3 h-full relative bg-[#A3A3A3] overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply" 
              />
              <div className="absolute bottom-24 left-24 max-w-xl">
                <p className="text-white text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeStatIndex, setActiveStatIndex] = useState(0);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: window.innerWidth, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const { scrollXProgress } = useScroll({ container: carouselRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30 });

  const stats = [
    { roman: "I", val: "14 years expertise", sub: "since 2011" },
    { roman: "II", val: "12 countries", sub: "worldwide presence" },
    { roman: "III", val: "125 represented brands", sub: "worldwide presence" },
    { roman: "IV", val: "12 retail spaces", sub: "worldwide presence" }
  ];

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;
    const interval = setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [stats.length]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile || !carouselRef.current) return;
    const container = carouselRef.current;
    const items = container.querySelectorAll('.snap-center');
    const targetItem = items[activeStatIndex] as HTMLElement;
    if (targetItem) {
      const targetScroll = targetItem.offsetLeft - (container.offsetWidth - targetItem.offsetWidth) / 2;
      animate(container.scrollLeft, targetScroll, { duration: 0.8, ease: "easeOut" });
    }
  }, [activeStatIndex]);

  const services = [
    { 
      id: 'retail', 
      title: 'Retail', 
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200&grayscale', 
      description: "We design, operate, and optimize omnichannel experiences for international brands, taking care of every detail of the customer journey. Our approach combines design, service, and commercial strategy, ensuring that every space reflects the true essence and values of the brand.", 
      link: '/retail', 
      shortDesc: "We design, operate, and optimize omnichannel experiences for international brands, taking care of every detail",
      values: ["Customer focus", "Teamwork"]
    },
    { 
      id: 'wholesale', 
      title: 'Wholesale', 
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200&grayscale', 
      description: "We manage complex distribution networks across all B2B touchpoints. Our approach combines supply chain efficiency and brand integrity, ensuring that every product reaches its destination while maintaining the true essence and values of the brand.", 
      link: '/wholesale', 
      shortDesc: "We manage complex distribution networks across all B2B touchpoints, taking care of every detail",
      values: ["Supply Chain Efficiency", "Brand Integrity"]
    }
  ];

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="w-full overflow-hidden bg-white">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-end justify-start px-6 md:px-24 pb-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <div className="absolute inset-0 bg-white/40 z-10"></div> 
           <motion.img 
             style={{ y }}
             initial={{ scale: 1.1 }}
             animate={{ scale: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920&grayscale" 
             className="w-full h-[120%] object-cover -top-[10%] relative" 
             alt="Hero" 
           />
        </div>
        <div className="relative z-20 max-w-2xl w-full">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <h1 className="text-h1 font-thin mb-8 uppercase text-primary-800 flex flex-col gap-1">
              <div className="overflow-hidden"><motion.span variants={{ hidden: { opacity: 0, y: "100%" }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } } }} className="block">Elevating</motion.span></div>
              <div className="overflow-hidden"><motion.span variants={{ hidden: { opacity: 0, y: "100%" }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } } }} className="block">TOP Brand</motion.span></div>
              <div className="overflow-hidden"><motion.span variants={{ hidden: { opacity: 0, y: "100%" }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } } }} className="block">Distribution</motion.span></div>
            </h1>
            <div className="overflow-hidden mb-12">
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: "100%" },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
                }}
                className="text-p-lg text-primary-700 max-w-md"
              >
                14 years optimizing omnichannel experiences for international brands.
              </motion.p>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
            >
              <Link to="/contact">
                <Button variant="primary">CONTACT US</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-p-xsm uppercase tracking-widest text-primary-800">Scroll</span>
          <div className="h-12 w-[1px] bg-primary-200 relative overflow-hidden">
            <motion.div 
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-full bg-primary-800"
            />
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="w-full bg-white">
        {/* Mobile Services */}
        <div className="md:hidden">
          {services.map((service, index) => (
            <ServiceBlock 
              key={service.id} 
              service={service} 
              index={index} 
              isLast={index === services.length - 1} 
            />
          ))}
        </div>
        
        {/* Desktop Services Carousel */}
        <DesktopServicesCarousel services={services} />
      </section>

      {/* Mobile Why Trust Us */}
      <section className="md:hidden py-16 bg-[#F5F5F5] relative overflow-hidden">
        <div className="max-w-[1500px] mx-auto relative flex flex-col items-center">
          <div className="text-center mb-6">
            <h2 className="font-heading font-thin text-[64px] text-primary-800 tracking-tight leading-none">Why Trust Us</h2>
          </div>
          <div ref={carouselRef} className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
            {stats.map((stat, idx) => (
              <motion.div key={idx} className="flex-none w-full snap-center px-6">
                <div className="bg-white p-8 h-[420px] flex flex-col justify-between shadow-sm">
                  <span className="text-[#A3A3A3] text-xl font-thin">{stat.roman}</span>
                  <div className="text-center pb-4">
                    <h3 className="text-[22px] text-primary-800 font-thin mb-1">{stat.val}</h3>
                    <p className="text-xs text-primary-800 font-medium">{stat.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <Link to="/contact">
            <button className="bg-[#1A1A1A] text-white px-12 py-3.5 text-xs font-light hover:bg-black transition-colors">
              Contact us
            </button>
          </Link>
        </div>
      </section>

      {/* Desktop Why Trust Us */}
      <section className="hidden md:block pt-12 pb-20 bg-primary-50 relative overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-12">
          <div className="text-center mb-0">
            <h2 className="font-heading font-thin text-[128px] leading-[0.8] text-primary-800 tracking-tight">
              Why Trust Us
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-primary-400 text-sm mb-2">{stat.roman}</span>
                <div className="bg-primary-100 w-full aspect-square mb-0"></div>
                <div className="bg-white p-6 text-center flex flex-col justify-center items-center h-28">
                  <h3 className="text-primary-800 text-lg font-light mb-1">{stat.val}</h3>
                  <p className="text-primary-800 text-xs font-medium">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 flex justify-center">
            <Link to="/contact">
              <button className="bg-primary-800 text-white px-10 py-4 text-sm hover:bg-primary-700 transition-colors">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;