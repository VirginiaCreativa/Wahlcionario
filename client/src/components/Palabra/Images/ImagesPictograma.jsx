import React, { useRef, useEffect } from 'react';

const ImagesPictograma = ({ src }) => {
  const imgEl = useRef(null);

  useEffect(() => {
    console.log(imgEl);
  }, []);
  return (
    <>
      <img src={src} alt="" ref={imgEl} />
    </>
  );
};

export default ImagesPictograma;
