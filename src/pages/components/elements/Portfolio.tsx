import { useState } from 'react';

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      content: (
        <div className="w-full h-full flex items-center justify-center">
          Slide 1
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="w-full h-full flex items-center justify-center">
          Slide 2
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="w-full h-full flex items-center justify-center">
          Slide 3
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="w-full h-full bg-yellow-500 flex items-center justify-center">
          Slide 4
        </div>
      ),
    },
  ];

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-full flex-shrink-0 transform transition-transform duration-300 ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {slide.content}
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-md"
        onClick={goToPreviousSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r-md"
        onClick={goToNextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Portfolio;