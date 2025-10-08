import { Box } from "@mantine/core";
import Category_List from "./category-list";
import Hero_Carousel from "./hero-carousel";

export default function Hero_Section() {
  return (
    <section>
      <Box className="grid grid-cols-1 md:!grid-cols-[260px_1fr] !mx-auto max-w-full">
        <aside className="hidden md:block border-gray-200 border-r">
          <Category_List />
        </aside>

        <Box
          pl={{ base: 0, md: 20, lg: 40 }}
          pt={{ base: 0, md: 20, lg: 40 }}
          className="w-full h-[340px]"
        >
          <Hero_Carousel />
        </Box>
      </Box>
    </section>
  );
}
