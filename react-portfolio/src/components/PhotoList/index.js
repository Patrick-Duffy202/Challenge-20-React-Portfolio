import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
        name: 'Find Your Fit',
        category: 'projects',
        description:
        "https://ancient-citadel-80522.herokuapp.com/"
      },
      {
        name: 'Lightwall',
        category: 'projects',
        description:
        "https://videohive.net/item/light-wall-v2/3971280"
      },
      {
        name: 'Calculator',
        category: 'projects',
        description:
        "https://www.online-calculator.com/full-screen-calculator/"
      },
      {
        name: 'Run Buddy',
        category: 'projects',
        description:
        "https://patrick-duffy202.github.io/run-buddy/"
      },
      {
        name: 'Tempo Run',
        category: 'projects',
        description:
        "https://amaragh.github.io/tempo-run-songfinder/"
      }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
