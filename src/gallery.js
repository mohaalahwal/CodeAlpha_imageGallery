import Preview from "./preview";
import Thumps from "./thumps";
import { images } from "./imgData";
import { useState } from "react";
function Gallery() {
  const [image, setImage] = useState(images[0]);

  function handleImgClick(e) {
    if (!images) return;
    setImage(images.find((img) => img.imgId === Number(e.target.id)));
  }
  return (
    <div className="gallery">
      <Preview image={image} images={images} handleImgClick={handleImgClick} />
      <Thumps images={images} handleImgClick={handleImgClick} />
    </div>
  );
}
export default Gallery;
