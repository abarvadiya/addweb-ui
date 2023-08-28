import Image from "next/image";
import { ImageProps, DefaultImage } from "../../../common-utils";

const NextImage = ({
  src = DefaultImage.DEFAULT_IMAGE,
  alt = DefaultImage.DEFAULT_ALT,
  width,
  height,
  className,
  loading = DefaultImage.DEFAULT_LOADING,
}: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
    />
  );
};

export default NextImage;
