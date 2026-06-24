function Image({ image, alt, className = "" }) {
  return (
    <div className="image">
      <img src={image} alt={alt} className={className} />
    </div>
  );
}

export default Image;
    
