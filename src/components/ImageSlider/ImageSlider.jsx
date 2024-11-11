import React, { useRef, useState, useEffect } from 'react';
import './ImageSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import assets from '../../assets/assets';

const ImageSlider = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [positionDiff, setPositionDiff] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    snapToImage();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    snapToImage();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    setPositionDiff(walk);
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    setPositionDiff(walk);
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    snapToImage();
  };

  const snapToImage = () => {
    const imgWidth = carouselRef.current.firstChild.clientWidth + 14; // Including margin
    const scrollPosition = carouselRef.current.scrollLeft;
    const index = Math.round(scrollPosition / imgWidth);
    carouselRef.current.scrollLeft = index * imgWidth;
  };

  const scrollLeftHandler = () => {
    const imgWidth = carouselRef.current.firstChild.clientWidth + 14;
    carouselRef.current.scrollLeft -= imgWidth;
  };

  const scrollRightHandler = () => {
    const imgWidth = carouselRef.current.firstChild.clientWidth + 14;
    carouselRef.current.scrollLeft += imgWidth;
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    const handleScroll = () => {
      // Optional: Add any scroll-related effects here
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => {
      carousel.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="slider-wrapper">
      <FontAwesomeIcon
        icon={faAngleLeft}
        className="arrow left"
        onClick={scrollLeftHandler}
      />
      <div
        className={`carousel ${isDragging ? 'dragging' : ''}`}
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Replace these images with your desired images */}
        <img src={assets.img1} alt="Slide 1" draggable="false" />
        <img src={assets.img2} alt="Slide 2" draggable="false" />
        <img src={assets.img3} alt="Slide 3" draggable="false" />
        <img src={assets.img4} alt="Slide 4" draggable="false" />
        <img src={assets.img5} alt="Slide 5" draggable="false" />
        <img src={assets.img6} alt="Slide 6" draggable="false" />
        <img src={assets.img7} alt="Slide 7" draggable="false" />
        <img src={assets.img8} alt="Slide 8" draggable="false" />
        <img src={assets.img9} alt="Slide 9" draggable="false" />
      </div>
      <FontAwesomeIcon
        icon={faAngleRight}
        className="arrow right"
        onClick={scrollRightHandler}
      />
    </div>
  );
};

export default ImageSlider;