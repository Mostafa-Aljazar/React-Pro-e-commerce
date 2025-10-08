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

  const slides = chunkArray(EXPLORE_OUR_PRODUCTS_DATA, 12);

  return (
    <section className="mx-auto py-6 container">
      <Stack gap={0}>
        <Stack gap={10} mb={20}>
          <Section_Header label="Our Products" />
          <Group justify="space-between" flex={1} w={"100%"}>
            <Title
              order={2}
              fz={{ base: 20, sm: 28, md: 32 }}
              fw={700}
              textWrap="nowrap"
            >
              Browse By Category
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
                cols={{ base: 2, sm: 3, lg: 4 }}
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
          mt={{ base: 20, md: 30, lg: 40 }}
          radius={"xs"}
          px={48}
          c={"white"}
          mx={"auto"}
          className="!bg-red-dark"
        >
          View All Products
        </Button>
      </Stack>
    </section>
  );
}
