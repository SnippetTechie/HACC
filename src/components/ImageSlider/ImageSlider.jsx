import React, { useRef, useState, useEffect } from 'react';
import './ImageSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import assets from '../../assets/assets';

const ImageSlider = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  useEffect(() => {
    // No cloning logic needed since we're removing the infinite loop
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      snapToImage();
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      snapToImage();
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
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
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      snapToImage();
    }
  };

  const snapToImage = () => {
    const carousel = carouselRef.current;
    const imgWidth = carousel.children[0].clientWidth + parseInt(getComputedStyle(carousel.children[0]).marginLeft);
    const scrollPosition = carousel.scrollLeft;
    const index = Math.round(scrollPosition / imgWidth);
    carousel.scrollTo({
      left: index * imgWidth,
      behavior: 'smooth',
    });
  };

  const scrollLeftHandler = () => {
    if (isTransitioning) return;
    const carousel = carouselRef.current;
    const imgWidth = carousel.children[0].clientWidth + parseInt(getComputedStyle(carousel.children[0]).marginLeft);
    setIsTransitioning(true);
    carousel.scrollTo({
      left: carousel.scrollLeft - imgWidth,
      behavior: 'smooth',
    });
    // Reset the transitioning state after the scroll animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Duration should match the CSS transition duration
  };

  const scrollRightHandler = () => {
    if (isTransitioning) return;
    const carousel = carouselRef.current;
    const imgWidth = carousel.children[0].clientWidth + parseInt(getComputedStyle(carousel.children[0]).marginLeft);
    setIsTransitioning(true);
    carousel.scrollTo({
      left: carousel.scrollLeft + imgWidth,
      behavior: 'smooth',
    });
    // Reset the transitioning state after the scroll animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Duration should match the CSS transition duration
  };

  // Modal Handling
  const handleImageClick = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <>
      <div className="slider-wrapper">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="arrow left"
          onClick={scrollLeftHandler}
          aria-label="Previous Slide"
          role="button"
          tabIndex="0"
          onKeyPress={(e) => { if (e.key === 'Enter') scrollLeftHandler(); }}
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
          {/* Original Images */}
          <img src={assets.img1} alt="Slide 1" draggable="false" onClick={() => handleImageClick(assets.img1)} />
          <img src={assets.img2} alt="Slide 2" draggable="false" onClick={() => handleImageClick(assets.img2)} />
          <img src={assets.img3} alt="Slide 3" draggable="false" onClick={() => handleImageClick(assets.img3)} />
          <img src={assets.img4} alt="Slide 4" draggable="false" onClick={() => handleImageClick(assets.img4)} />
          <img src={assets.img5} alt="Slide 5" draggable="false" onClick={() => handleImageClick(assets.img5)} />
          <img src={assets.img6} alt="Slide 6" draggable="false" onClick={() => handleImageClick(assets.img6)} />
          <img src={assets.img7} alt="Slide 7" draggable="false" onClick={() => handleImageClick(assets.img7)} />
          <img src={assets.img8} alt="Slide 8" draggable="false" onClick={() => handleImageClick(assets.img8)} />
          <img src={assets.img9} alt="Slide 9" draggable="false" onClick={() => handleImageClick(assets.img9)} />
        </div>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="arrow right"
          onClick={scrollRightHandler}
          aria-label="Next Slide"
          role="button"
          tabIndex="0"
          onKeyPress={(e) => { if (e.key === 'Enter') scrollRightHandler(); }}
        />
      </div>

      {/* Modal for Fullscreen Image */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <FontAwesomeIcon
            icon={faTimes}
            className="close-button"
            onClick={closeModal}
            aria-label="Close Modal"
            role="button"
            tabIndex="0"
            onKeyPress={(e) => { if (e.key === 'Enter') closeModal(); }}
          />
          <img src={modalImage} alt="Fullscreen Slide" />
        </div>
      )}
    </>
  );
};

export default ImageSlider;