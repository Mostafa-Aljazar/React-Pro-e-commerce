import { Button, Group, SimpleGrid, Stack, Title } from "@mantine/core";
import { Section_Header } from "../../common/section-header";
import { Product_Card } from "../../common/product-card";
import type { EmblaCarouselType } from "embla-carousel";
import { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { chunkArray } from "@/utils/chunkArray";
import { Carousel_Controls } from "@/components/common/carousel-controls";
import { Carousel_Section } from "@/components/common/carousel-section";
import { EXPLORE_OUR_PRODUCTS_DATA } from "@/contents";

export default function Explore_Our_Products_Section() {
  const flashSaleEnd = new Date();
  flashSaleEnd.setDate(flashSaleEnd.getDate() + 3);

  const exploreOurProductsEmblaRef = useRef<EmblaCarouselType | null>(null);

  const slides = chunkArray(EXPLORE_OUR_PRODUCTS_DATA, 8);

  return (
    <section className="mx-auto mb-0 md:mb-5 md:py-16 pt-10 pb-5 container">
      <Stack gap={20}>
        <Stack gap={10} mb={20}>
          <Section_Header label="Our Products" />
          <Group justify="space-between" flex={1} w={"100%"}>
            <Title
              order={2}
              fz={{ base: 20, sm: 28, md: 32 }}
              fw={700}
              textWrap="nowrap"
            >
              Explore Our Products
            </Title>
            <Carousel_Controls emblaRef={exploreOurProductsEmblaRef} />
          </Group>
        </Stack>

        <Carousel_Section
          emblaRef={exploreOurProductsEmblaRef}
          slides={slides}
          slideSize={{ base: "100%" }}
          slideGap={{ base: 10 }}
          renderItem={(productsChunk, i) => (
            <Carousel.Slide key={i}>
              <SimpleGrid
                cols={{ base: 2, sm: 2, lg: 4 }}
                spacing={20}
                verticalSpacing={20}
              >
                {productsChunk.map((product, j) => (
                  <Product_Card key={j} {...product} />
                ))}
              </SimpleGrid>
            </Carousel.Slide>
          )}
        />

        <Button
          radius={"xs"}
          c={"white"}
          mx={"auto"}
          fw={500}
          fz={16}
          h={{ base: 50, md: 56 }}
          w={{ base: 200, md: 230 }}
          className="!bg-red-dark"
          mt={{ base: 0, md: 20 }}
        >
          View All Products
        </Button>
      </Stack>
    </section>
  );
}
