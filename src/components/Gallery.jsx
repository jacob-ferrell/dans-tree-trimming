import '../styles/Gallery.css';
import { Modal } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import GalleryCarousel from './GalleryCarousel';

const importAll = (r) => {
  return Object.values(r).map((module) => module.default);
};

const images = importAll(import.meta.globEager("../assets/images/*.{png,jpg,jpeg}"));

const Gallery = (props) => {
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (image) => setModalImage(image);

  const handleCloseModal = () => setModalImage(null);

  return (
    <div className="content" id="gallery">
      <GalleryCarousel />

      <Modal show={!!modalImage} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalImage?.alt}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalImage?.url} alt={modalImage?.alt} className="w-100" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Gallery;
