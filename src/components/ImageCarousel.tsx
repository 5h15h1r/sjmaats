import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

interface CarouselImage {
  id: number;
  title: string;
  src: string;
  alt: string;
}

const ImageCarousel: React.FC = () => {
  const images: CarouselImage[] = [
    {
      id: 1,
      title: "Nature Scene",
      src: "https://picsum.photos/id/0/5000/3333",
      alt: "Beautiful nature landscape",
    },
    {
      id: 2,
      title: "Urban View",
      alt: "City skyline",
      src: "https://picsum.photos/id/1/5000/3333",
    },
    {
      id: 3,
      title: "Mountain Range",
      alt: "Snow-capped mountains",
      src: "https://picsum.photos/id/2/5000/3333",
    },
  ];

  return (
    <Carousel
      className="mx-auto w-full max-w-3xl"
      opts={{
        loop: true,
        align: "start",
      }}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id}>
            <div className="p-1">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={image.id === 1} // Priority loading for first image
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
                  <h3 className="text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};

export default ImageCarousel;
