import React from 'react'

const Gallery = ({ item }) => {
  return (
    <>
    <div className="col-lg-4 col-md-4 col-sm-12 p-2">
        <img src={item.download_url} alt={`image_${item.id}`} 
        height="200" width="300" />
    </div>
    </>
  )
}

export default Gallery