import React, { useEffect }  from 'react';
import Image from 'next/image';
import imageBanner from '../assets/ImageBanner2.png';

interface PictureGridProps {
  children: any
}

export const PictureGrid: React.FC<PictureGridProps> = ({children}) => {

  // const image = new Image();
  // // let imageUrl = ima;

  // useEffect(() => {
  //   image.onload = function() {
  //     document.getElementById("image");
  //   }

  //   image.src = '../assets/Image.png';

  // }, [])

  return (
    <div className="information">
      {children}
      <picture>
        <Image src={imageBanner} alt="Neyen Marinelli" />
      </picture>
     </div>
  )
};
