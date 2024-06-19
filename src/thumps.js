export default function Thumps({ images, handleImgClick }) {
  return (
    <div className="thumps">
      {images.map((img) => (
        <img
          src={img.imgUrl}
          onClick={handleImgClick}
          alt={img.imgTitle}
          key={img.imgId}
          id={img.imgId}
        ></img>
      ))}
    </div>
  );
}
