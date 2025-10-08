import { Group, Stack, Title } from "@mantine/core";
import { Section_Header } from "../../common/section-header";
import { useRef } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { Category_Card } from "./category-card";
import { Carousel } from "@mantine/carousel";
import { BROWSED_CATEGORIES_DATA } from "@/contents";
import { Carousel_Controls } from "@/components/common/carousel-controls";
import { Carousel_Section } from "@/components/common/carousel-section";
export default function Browse_By_Category_Section() {
  const flashSaleEnd = new Date();
  flashSaleEnd.setDate(flashSaleEnd.getDate() + 3);

  const categoryEmblaRef = useRef<EmblaCarouselType | null>(null);

  return (
    <section className="mx-auto py-6 container">
      <Stack gap={0}>
        <Stack gap={10} mb={20}>
          <Section_Header label="Categories" />
          <Group justify="space-between" flex={1} w={"100%"}>
            <Title
              order={2}
              fz={{ base: 20, sm: 28, md: 32 }}
              fw={700}
              textWrap="nowrap"
            >
              Browse By Category
            </Title>
            <Carousel_Controls emblaRef={categoryEmblaRef} />
          </Group>
        </Stack>

        <Carousel_Section
          slideSize={{ base: "40%", md: "20%", lg: "12%" }}
          slideGap={{ base: 10, md: 15, lg: 15 }}
          emblaRef={categoryEmblaRef}
          slides={BROWSED_CATEGORIES_DATA}
          renderItem={(category, i) => (
            <Carousel.Slide key={i}>
              <Category_Card {...category} />
            </Carousel.Slide>
          )}
        />
      </Stack>
    </section>
  );
}
