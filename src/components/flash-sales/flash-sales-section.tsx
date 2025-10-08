import { Button, Flex, Group, Stack, Title } from "@mantine/core";
import { Section_Header } from "../common/section-header";
import { Countdown_Timer } from "../common/countdown-timer";
import { Swiper_Section } from "../common/swiper-section";
import { CarouselControls } from "../common/carousel-controls";
import { useRef } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { Carousel } from "@mantine/carousel";
import { Product_Card } from "../common/product-card";
import { Image_Item_Card } from "@/assets";

const products = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 75,
    discount: 35,
    image: Image_Item_Card,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
    discount: 30,
    image: Image_Item_Card,
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    rating: 4,
    reviews: 99,
    discount: 25,
    image: Image_Item_Card,
  },
  // ///////////////
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
];

export default function Flash_Sales_Section() {
  const flashSaleEnd = new Date();
  flashSaleEnd.setDate(flashSaleEnd.getDate() + 3);

  const productEmblaRef = useRef<EmblaCarouselType | null>(null);

  return (
    <section className="mx-auto py-6 container">
      <Stack gap={20} className="w-full">
        <Stack gap={10}>
          <Section_Header label="Today's" />
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "start", md: "center" }}
            gap={{ base: 10, md: 100 }}
          >
            <Title
              order={2}
              fz={{ base: 20, sm: 28, md: 32 }}
              fw={700}
              textWrap="nowrap"
            >
              Flash Sales
            </Title>
            <Group justify="space-between" flex={1} w={"100%"}>
              <Countdown_Timer targetDate={flashSaleEnd} />

              <CarouselControls emblaRef={productEmblaRef} />
            </Group>
          </Flex>
        </Stack>

        <Swiper_Section
          slideSize={{ base: "45%", md: "30%", lg: "23%" }}
          slideGap={{ base: 10, md: 15, lg: 20 }}
          emblaRef={productEmblaRef}
          slides={products}
          renderItem={(product, i) => (
            <Carousel.Slide key={i}>
              <Product_Card {...product} />
            </Carousel.Slide>
          )}
        />

        <Button
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
