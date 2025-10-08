import { Box, Stack } from "@mantine/core";
import Category_List from "./category-list";
import Hero_Carousel from "./hero-carousel";
import Category_Section from "./category-section";

export default function Hero_Section() {
  return (
    <section>
      <Box className="grid grid-cols-1 md:!grid-cols-[260px_1fr] !mx-auto max-w-full">
        <aside className="hidden md:block border-gray-200 border-r">
          <Category_List />
        </aside>

        <Stack
          pl={{ base: 0, md: 20, lg: 40 }}
          pt={{ base: 0, md: 20, lg: 40 }}
        >
          <Category_Section />
          <Box className="w-full h-[340px]">
            <Hero_Carousel />
          </Box>
        </Stack>
      </Box>
    </section>
  );
}
