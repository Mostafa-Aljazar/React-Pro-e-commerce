import { Carousel } from "@mantine/carousel";
import { Box } from "@mantine/core";
import { useRef, type MutableRefObject, type ReactNode } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

interface Carousel_Section_Props<T> {
  emblaRef: MutableRefObject<EmblaCarouselType | null>;
  slides: T[];
  renderItem: (item: T, index: number) => ReactNode;
  slideSize?: { base: string; md?: string; lg?: string };
  slideGap?: { base: number; md?: number; lg?: number };
}

export function Carousel_Section<T>({
  emblaRef,
  slides,
  renderItem,
  slideSize = { base: "45%", md: "30%", lg: "23%" },
  slideGap = { base: 10, md: 15, lg: 20 },
}: Carousel_Section_Props<T>) {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <Box pos="relative" w="100%">
      <Carousel
        withControls={false}
        getEmblaApi={(embla) => (emblaRef.current = embla)}
        slideSize={slideSize}
        slideGap={slideGap}
        emblaOptions={{ align: "start", slidesToScroll: 1, loop: true }}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
      >
        {slides.map(renderItem)}
      </Carousel>
    </Box>
  );
}
