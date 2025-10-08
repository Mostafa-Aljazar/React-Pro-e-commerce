import { Group, Stack, Title } from "@mantine/core";
import { Section_Header } from "../common/section-header";
import { useRef } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { CarouselControls } from "../common/carousel-controls";
import { Category_Card } from "./category-card";
import {
  Smartphone,
  Laptop,
  Watch,
  Camera,
  Headphones,
  Gamepad,
  ShoppingBag,
  Home,
  Dumbbell,
  ShoppingCart,
  HeartPulse,
  Shirt,
  BriefcaseMedical,
  Baby,
} from "lucide-react";
import { Swiper_Section } from "../common/swiper-section";
import { Carousel } from "@mantine/carousel";
export default function Browse_By_Category_Section() {
  const flashSaleEnd = new Date();
  flashSaleEnd.setDate(flashSaleEnd.getDate() + 3);

  const categoryEmblaRef = useRef<EmblaCarouselType | null>(null);
  const categories = [
    {
      icon: <Shirt strokeWidth={1.5} className="w-10 h-10" />,
      label: "Women’s Fashion",
    },
    {
      icon: <ShoppingBag strokeWidth={1.5} className="w-10 h-10" />,
      label: "Men’s Fashion",
    },
    {
      icon: <Smartphone strokeWidth={1.5} className="w-10 h-10" />,
      label: "Phones",
    },
    {
      icon: <Laptop strokeWidth={1.5} className="w-10 h-10" />,
      label: "Computers",
    },
    {
      icon: <Watch strokeWidth={1.5} className="w-10 h-10" />,
      label: "SmartWatch",
    },
    {
      icon: <Camera strokeWidth={1.5} className="w-10 h-10" />,
      label: "Camera",
    },
    {
      icon: <Headphones strokeWidth={1.5} className="w-10 h-10" />,
      label: "Headphones",
    },
    {
      icon: <Gamepad strokeWidth={1.5} className="w-10 h-10" />,
      label: "Gaming",
    },
    {
      icon: <Home strokeWidth={1.5} className="w-10 h-10" />,
      label: "Home & Lifestyle",
    },
    {
      icon: <BriefcaseMedical strokeWidth={1.5} className="w-10 h-10" />,
      label: "Medicine",
    },
    {
      icon: <Dumbbell strokeWidth={1.5} className="w-10 h-10" />,
      label: "Sports & Outdoor",
    },
    {
      icon: <Baby strokeWidth={1.5} className="w-10 h-10" />,
      label: "Baby & Toys",
    },
    {
      icon: <ShoppingCart strokeWidth={1.5} className="w-10 h-10" />,
      label: "Groceries & Pets",
    },
    {
      icon: <HeartPulse strokeWidth={1.5} className="w-10 h-10" />,
      label: "Health & Beauty",
    },
  ];
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
            <CarouselControls emblaRef={categoryEmblaRef} />
          </Group>
        </Stack>

        <Swiper_Section
          slideSize={{ base: "40%", md: "20%", lg: "12%" }}
          slideGap={{ base: 10, md: 15, lg: 15 }}
          emblaRef={categoryEmblaRef}
          slides={categories}
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
