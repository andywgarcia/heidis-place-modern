export interface SiteImage {
  src: string;
  alt: string;
  width: number;
}

const maxGeneratedWidth = 1600;
const responsiveWidths = [480, 800, 1200, maxGeneratedWidth];

export const generatedWidthsFor = (image: SiteImage) => {
  const sourceWidth = Math.min(image.width, maxGeneratedWidth);
  const widths = responsiveWidths.filter((width) => width <= sourceWidth);

  if (!widths.includes(sourceWidth)) {
    widths.push(sourceWidth);
  }

  return widths;
};

export const heroImage: SiteImage = {
  src: '/images/hero.jpg',
  alt: "Framed artwork and studio detail from Heidi's Place Custom Picture Framing",
  width: 2000,
};

export const galleryImages: SiteImage[] = [
  { src: '/images/P1010084.jpg', alt: 'Beautifully framed art pieces displayed on a wall', width: 1598 },
  { src: '/images/P1010091.jpg', alt: 'Custom framed pictures with decorative accents', width: 1447 },
  { src: '/images/P1010090.jpg', alt: 'Elegant frame selection showcasing design expertise', width: 1815 },
  { src: '/images/bourbon-bull.jpg', alt: 'Heidi with a vibrant large-scale Bourbon Street painting in custom frame', width: 1650 },
  { src: '/images/gallery.jpg', alt: 'Framed landscape photograph elegantly displayed on a white wall', width: 703 },
  { src: '/images/DSC_0020.jpg', alt: 'Expertly framed needlework piece', width: 3872 },
  { src: '/images/May_2011_046.jpg', alt: 'Needlework being carefully stretched', width: 3264 },
  { src: '/images/needlework.jpg', alt: 'Finished needlework in elegant frame', width: 1120 },
  { src: '/images/kimono.jpg', alt: 'Intricate kimono needlework in gold frame with sage mat', width: 1120 },
  { src: '/images/May_2011_033.jpg', alt: 'Custom framing with unique personal touches', width: 3180 },
  { src: '/images/April_2007_149.jpg', alt: 'Custom uniform and memorabilia framing', width: 3264 },
  { src: '/images/June_2006_027.jpg', alt: 'Creative multi-opening custom frame design', width: 1865 },
  { src: '/images/gallery-nature.jpg', alt: 'Multi-panel ocean photography gallery wall installation', width: 960 },
  { src: '/images/Heidi_38.jpg', alt: 'Heidi carefully crafting a custom frame', width: 960 },
  { src: '/images/Heidi_45.jpg', alt: 'Precision framing tools and craftsmanship', width: 1440 },
  { src: '/images/Heidi_47.jpg', alt: 'High-quality frame corner detail', width: 960 },
  { src: '/images/heidi-in-client.jpg', alt: 'Heidi delivering and installing custom framed art at a client location', width: 1152 },
];

export const studioImage: SiteImage = {
  src: '/images/heidi-studio.png',
  alt: 'Heidi in her framing studio surrounded by custom frames and materials',
  width: 640,
};
