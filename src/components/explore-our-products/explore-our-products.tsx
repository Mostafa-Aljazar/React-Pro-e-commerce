import { Button, Group, SimpleGrid, Stack, Title } from "@mantine/core";
import { Section_Header } from "../common/section-header";
import { Product_Card, type ProductCardProps } from "../common/product-card";
import { CarouselControls } from "../common/carousel-controls";
import type { EmblaCarouselType } from "embla-carousel";
import { useRef } from "react";
import { Swiper_Section } from "../common/swiper-section";
import { Carousel } from "@mantine/carousel";
import { chunkArray } from "@/utils/chunkArray";
import { Image_Item_Card } from "@/assets";

export const exploreOurProducts: ProductCardProps[] = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    rating: 5,
    reviews: 88,
    isNew: true,
    image: Image_Item_Card,
    colors: [
      { color: "#ff00aa", active: true },
      { color: "#1122ff" },
      { color: "#aa8822" },
    ],
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    rating: 4,
    reviews: 75,
    image: Image_Item_Card,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    rating: 5,
    reviews: 99,
    isNew: true,
    image: Image_Item_Card,
    colors: [{ color: "#ff0000", active: true }, { color: "#0000ff" }],
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    rating: 4,
    reviews: 99,
    isNew: true,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    rating: 5,
    reviews: 88,
    image: Image_Item_Card,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    rating: 4,
    reviews: 75,
    image: Image_Item_Card,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    rating: 5,
    reviews: 99,
    image: Image_Item_Card,
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    rating: 4,
    reviews: 99,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    rating: 5,
    reviews: 88,
    isNew: true,
    image: Image_Item_Card,
    colors: [
      { color: "#ff00aa", active: true },
      { color: "#1122ff" },
      { color: "#aa8822" },
    ],
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    rating: 4,
    reviews: 75,
    image: Image_Item_Card,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    rating: 5,
    reviews: 99,
    isNew: true,
    image: Image_Item_Card,
    colors: [
      { color: "#ff0000", active: true },
      { color: "#00ff00" },
      { color: "#0000ff" },
    ],
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    rating: 4,
    reviews: 99,
    image: Image_Item_Card,
    colors: [{ color: "#8B4513", active: true }, { color: "#FFD700" }],
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    rating: 5,
    reviews: 88,
    image: Image_Item_Card,
    colors: [{ color: "#ff00aa", active: true }, { color: "#1122ff" }],
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    rating: 4,
    reviews: 75,
    image: Image_Item_Card,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    rating: 5,
    reviews: 99,
    isNew: true,
    image: Image_Item_Card,
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    rating: 4,
    reviews: 99,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    rating: 5,
    reviews: 88,
    image: Image_Item_Card,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    rating: 4,
    reviews: 75,
    image: Image_Item_Card,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    rating: 5,
    reviews: 99,
    isNew: true,
    image: Image_Item_Card,
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    rating: 4,
    reviews: 99,
    image: Image_Item_Card,
    colors: [{ color: "#8B4513", active: true }, { color: "#FFD700" }],
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    rating: 5,
    reviews: 88,
    image: Image_Item_Card,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    rating: 4,
    reviews: 75,
    image: Image_Item_Card,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    rating: 5,
    reviews: 99,
    image: Image_Item_Card,
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    rating: 4,
    reviews: 99,
    isNew: true,
    image: Image_Item_Card,
  },
];

export default function Explore_Our_Products() {
  const flashSaleEnd = new Date();
  flashSaleEnd.setDate(flashSaleEnd.getDate() + 3);

  const exploreOurProductsEmblaRef = useRef<EmblaCarouselType | null>(null);

  const slides = chunkArray(exploreOurProducts, 12);

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
            <CarouselControls emblaRef={exploreOurProductsEmblaRef} />
          </Group>
        </Stack>

        <Swiper_Section
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
