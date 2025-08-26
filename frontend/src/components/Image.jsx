import { IKImage } from "imagekitio-react";

const Image = ({ src, className, w, h, alt }) => {
  return (
    <IKImage
      urlEndpoint={"https://ik.imagekit.io/zaidlog/"}
      path={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={w}
      height={h}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default Image;