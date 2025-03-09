import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import './App.css'

function App() {

  const [photoGalleryArray, updatePhotoGalleryArray] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
    .then((res) => {
      return res.json();
    })
    .then((photoGalleryArray) => {
      console.log(photoGalleryArray);
      updatePhotoGalleryArray(photoGalleryArray);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <div className="w-100 text-light">Image Gallery</div>
        </nav>
        <div className="row">
          { photoGalleryArray.map((item, index) => (
            <Gallery key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
