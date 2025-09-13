import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';

const slides = [
  {
    id: 1,
    image: heroSlide1,
    title: "Start Your Own Credit Cooperative or Microfinance Company",
    subtitle: "From registration to growth – Expert consultancy for Credit Cooperative Societies, Multi-State Societies, and Section 8 Microfinance Companies.",
    primaryBtn: "Get Started Today",
    secondaryBtn: "Explore Now"
  },
  {
    id: 2,
    image: heroSlide2,
    title: "Complete Compliance and Audit Solutions",
    subtitle: "We take care of all your statutory, audit, and regulatory needs as per RBI and Ministry guidelines.",
    primaryBtn: "Explore Our Compliance Services",
    secondaryBtn: "View Gallery"
  },
  {
    id: 3,
    image: heroSlide3,
    title: "Training That Builds Cooperative Leaders",
    subtitle: "Customized training programs for your board, staff, and members to ensure strong governance and effective operations.",
    primaryBtn: "View Training Programs",
    secondaryBtn: "Learn More"
  },
  {
    id: 4,
    image: heroSlide1,
    title: "Grow and Expand Your Banking Business",
    subtitle: "We help you scale your cooperative or microfinance institution with branch expansion, product development, and digital systems.",
    primaryBtn: "Plan Your Growth",
    secondaryBtn: "Learn More"
  },
  {
    id: 5,
    image: heroSlide2,
    title: "Sahakar Samruddhi – Your Trusted Partner in Cooperative Success",
    subtitle: "We empower cooperative institutions with legal, financial, and strategic expertise tailored to your goals.",
    primaryBtn: "Request a Free Consultation",
    secondaryBtn: "Learn More"
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-6 text-center">
          <div
            key={currentSlide}
            className="animate-fade-in"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="lg" className="min-w-[160px]">
                {slides[currentSlide].primaryBtn}
              </Button>
              <Button variant="outline" size="lg" className="min-w-[160px] border-white text-white hover:bg-white hover:text-primary">
                {slides[currentSlide].secondaryBtn}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};