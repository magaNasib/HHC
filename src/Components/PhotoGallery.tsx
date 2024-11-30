import React, { useState } from "react";
import {
  AiFillLeftCircle,
  AiFillRightCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";

interface ImageGalleryProps {
  imageUrls: string[];
  name: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageUrls, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };

  return (
    <div>
      {/* Grid for images */}
      <div className={"grid grid-cols-1 lg:grid-cols-3 gap-4"}>
        {imageUrls.map((image, index) => (
          <div
            key={index}
            className={"h-[300px]"}
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt={name}
              className={
                "rounded-md w-full h-full object-cover object-center cursor-pointer"
              }
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageUrls[currentIndex]}
              alt={`Preview ${currentIndex}`}
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white  p-2 rounded-full"
            >
              <AiOutlineCloseCircle className="text-3xl" />
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-80 text-black p-3 rounded-full"
            >
              <AiFillLeftCircle className="text-white text-3xl" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-80 text-black p-3 rounded-full"
            >
              <AiFillRightCircle className="text-white text-3xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
