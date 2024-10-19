import { useEffect, useState } from "react";

const cache = {}; // Bộ nhớ tạm để lưu ảnh đã tải

const ImageComponent = ({ src, width, height, className }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`,
  );
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (cache[src]) {
      // Nếu ảnh đã có trong cache, dùng trực tiếp
      setCurrentSrc(src);
      setIsLoaded(true);
    } else {
      // Nếu chưa có, tải và lưu vào cache
      const img = new Image();
      img.src = src;
      img.onload = () => {
        cache[src] = true; // Lưu vào cache
        setCurrentSrc(src);
        setIsLoaded(true);
      };
    }
  }, [src]);

  return (
    <img
      className={`${className} ${isLoaded ? "loaded" : "blur-md"}`}
      src={currentSrc}
      width={width}
      height={height}
      alt="Movie backdrop"
    />
  );
};

export default ImageComponent;
