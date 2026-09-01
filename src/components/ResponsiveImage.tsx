import type { ImgHTMLAttributes } from 'react';

type ResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  src: string;
  widths: number[];
};

const imagePath = (src: string, width: number, format: 'avif' | 'webp') =>
  `${src.replace(/\.[^.]+$/, '')}-${width}.${format}`;

const sourceSet = (src: string, widths: number[], format: 'avif' | 'webp') =>
  widths.map((width) => `${imagePath(src, width, format)} ${width}w`).join(', ');

export default function ResponsiveImage({ src, widths, alt, sizes = '100vw', ...props }: ResponsiveImageProps) {
  return (
    <picture>
      <source type="image/avif" srcSet={sourceSet(src, widths, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={sourceSet(src, widths, 'webp')} sizes={sizes} />
      <img src={src} alt={alt} sizes={sizes} {...props} />
    </picture>
  );
}
