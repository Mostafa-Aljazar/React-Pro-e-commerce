import { Group, ActionIcon } from "@mantine/core";
import type { EmblaCarouselType } from "embla-carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { MutableRefObject } from "react";

interface CarouselControlsProps {
  emblaRef: MutableRefObject<EmblaCarouselType | null>;
}

export function Carousel_Controls({ emblaRef }: CarouselControlsProps) {
  return (
    <Group mt={16}>
      <ActionIcon
        className="!bg-gray-200"
        radius={100}
        p={2}
        w={{ base: 30, md: 40 }}
        h={{ base: 30, md: 40 }}
        onClick={() => emblaRef.current?.scrollPrev()}
      >
        <ArrowLeft color="black" className="w-4 md:w-6 h-4 md:h-6" />
      </ActionIcon>

      <ActionIcon
        className="!bg-gray-200"
        radius={100}
        p={2}
        w={{ base: 30, md: 40 }}
        h={{ base: 30, md: 40 }}
        onClick={() => emblaRef.current?.scrollNext()}
      >
        <ArrowRight color="black" className="w-4 md:w-6 h-4 md:h-6" />
      </ActionIcon>
    </Group>
  );
}
