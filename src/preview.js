export default function Preview({ image, images, handleImgClick }) {
  return (
    <div className="preview">
      <img src={image.imgUrl} alt={image.Title} />
      <div className="circle-btn">
        {images.map((img) => (
          <span
            className={img.imgId === image.imgId ? "active" : ""}
            onClick={handleImgClick}
            id={img.imgId}
          ></span>
        ))}
      </div>
      <div className="arrow-btn">
        <span className="arrow">&larr;</span>
        <span className="arrow">&rarr;</span>
      </div>
    </div>
  );
}
