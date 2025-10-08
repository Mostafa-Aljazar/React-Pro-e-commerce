import { HERO_SLIDES_DATA } from "@/contents";
import { Carousel } from "@mantine/carousel";
import { Box, Button, Flex, Group, Image, Stack, Text } from "@mantine/core";
import { Apple, ArrowRight } from "lucide-react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function Hero_Carousel() {
  const slides = HERO_SLIDES_DATA.map((item, index) => (
    <Carousel.Slide key={index} className="!bg-black">
      <Flex
        w={"100%"}
        h={340}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "start", md: "end" }}
        align="center"
        className="text-white"
        pos={"relative"}
      >
        <Stack
          gap={8}
          pos={"absolute"}
          className="md:!top-0 bottom-0 left-0 md:!left-0"
          h={{ base: "40%", md: "100%" }}
          align="start"
          justify="space-between"
          pt={{ base: 0, md: 50 }}
          pb={30}
          pl={{
            base: 20,
            md: 30,
            lg: 50,
          }}
        >
          <Group gap={20} wrap="nowrap" align="center">
            <Apple
              size={50}
              className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12"
            />
            <Text fz={16} fw={500}>
              {item.title}
            </Text>
          </Group>

          <Text
            fz={{ base: 25, md: 35, lg: 48 }}
            fw={500}
            w={{ base: "100%", md: "60%" }}
            lh={1.2}
          >
            {item.discount}
          </Text>

          <Button
            p={0}
            variant="transparent"
            bg={"transparent"}
            fw={500}
            fz={14}
            className="!w-fit text-white !underline underline-offset-8 transition-all"
            rightSection={<ArrowRight size={20} />}
          >
            Shop Now
          </Button>
        </Stack>

        <Box
          w={{ base: "70%", md: "60%", lg: "60%" }}
          pt={{ base: 50, md: 0 }}
          className="flex justify-center items-center !bg-black"
        >
          <Image src={item.img} alt={item.title} />
        </Box>
      </Flex>
    </Carousel.Slide>
  ));

  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <Box w={"100%"} h={"100%"} className="bg-black">
      <Carousel
        flex={1}
        slideSize="100%"
        slideGap={20}
        withControls={false}
        withIndicators
        controlSize={36}
        className="h-[340px]"
        emblaOptions={{
          loop: true,
          align: "center",
          slidesToScroll: 1,
        }}
        classNames={{
          indicator: "!bg-gray-400 !w-3 !h-3 !rounded-full mx-1",
        }}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
      >
        {slides}
      </Carousel>
    </Box>
  );
}
