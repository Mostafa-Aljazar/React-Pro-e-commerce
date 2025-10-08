import { useState } from "react";
import { Accordion, ActionIcon, Box, Drawer, Group, Text } from "@mantine/core";
import { Menu } from "lucide-react";
import Hero_Swiper from "./hero-swiper";
import { CATEGORIES } from "@/contents";

export function Category_List() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Accordion
      radius={0}
      value={active}
      onChange={setActive}
      className="w-full"
      transitionDuration={300}
    >
      {CATEGORIES.map((cat) =>
        cat.sub ? (
          <Accordion.Item key={cat.name} value={cat.name} p={0}>
            <Accordion.Control pl={10} fz={"md"}>
              {cat.name}
            </Accordion.Control>
            <Accordion.Panel>
              <ul className="flex flex-col gap-2 text-gray-600 transition-all duration-300 ease-in-out">
                {cat.sub.map((sub) => (
                  <li
                    key={sub}
                    className="text-gray-600 hover:text-black text-sm transition-colors duration-300 cursor-pointer"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </Accordion.Panel>
          </Accordion.Item>
        ) : (
          <Text
            key={cat.name}
            py={12}
            px={10}
            fz={"md"}
            className="hover:!bg-gray-100 transition-colors duration-300 cursor-pointer"
          >
            {cat.name}
          </Text>
        )
      )}
    </Accordion>
  );
}

export function Category_Section() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group
        onClick={() => setOpened(true)}
        justify="space-between"
        align="center"
        hiddenFrom="md"
        mb={16}
      >
        <Text fw={600} fz={16}>
          Show Categories
        </Text>
        <ActionIcon variant="transparent" size="sm" bg={"transparent"}>
          <Menu className="w-5 h-5 font-semibold text-black" />
        </ActionIcon>
      </Group>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Categories"
        overlayProps={{ backgroundOpacity: 0.5, blur: 2 }}
        size="80%"
        transitionProps={{ duration: 300 }}
      >
        <Category_List />
      </Drawer>
    </>
  );
}

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
          <Hero_Swiper />
        </Box>
      </Box>
    </section>
  );
}
