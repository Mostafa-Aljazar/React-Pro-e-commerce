import { Button, Flex, Group, Stack, Title } from "@mantine/core";
import { useRef } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { Carousel } from "@mantine/carousel";
import { FLASH_SALES_PRODUCTS } from "@/contents";
import { Section_Header } from "@/components/common/section-header";
import { Carousel_Section } from "@/components/common/carousel-section";
import { Countdown_Timer } from "@/components/common/countdown-timer";
import { Carousel_Controls } from "@/components/common/carousel-controls";
import { Product_Card } from "@/components/common/product-card";

export default function Flash_Sales_Section() {
  const flashSaleEnd = new Date();
  flashSaleEnd.setDate(flashSaleEnd.getDate() + 3);

  const productEmblaRef = useRef<EmblaCarouselType | null>(null);

  return (
    <section className="mx-auto py-10 md:py-16 container">
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

              <Carousel_Controls emblaRef={productEmblaRef} />
            </Group>
          </Flex>
        </Stack>

        <Carousel_Section
          slideSize={{ base: "45%", md: "30%", lg: "23%" }}
          slideGap={{ base: 10, md: 15, lg: 20 }}
          emblaRef={productEmblaRef}
          slides={FLASH_SALES_PRODUCTS}
          renderItem={(product, i) => (
            <Carousel.Slide key={i}>
              <Product_Card {...product} />
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
          mt={{ base: 10, md: 20 }}
        >
          View All Products
        </Button>
      </Stack>
    </section>
  );
}
