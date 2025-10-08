import { ActionIcon, Box, Drawer, Group, Title } from "@mantine/core";
import { CircleChevronRight } from "lucide-react";
import { useState } from "react";
import Category_List from "./category-list";

export default function Category_Section() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group
        onClick={() => setOpened((o) => !o)}
        justify="space-between"
        align="center"
        hiddenFrom="md"
        className="cursor-pointer select-none"
      >
        <Group gap={8}>
          <Box
            w={{ base: 15, md: 20 }}
            h={{ base: 30, md: 40 }}
            style={{ borderRadius: 4 }}
            className="!bg-red-dark"
          />
          <Title
            order={2}
            fz={{ base: 20, sm: 28, md: 32 }}
            fw={700}
            textWrap="nowrap"
          >
            Categories
          </Title>
        </Group>

        <ActionIcon
          size={"sm"}
          p={5}
          w={35}
          h={35}
          radius={100}
          className="!bg-gray-100"
        >
          <CircleChevronRight
            className={`w-5 h-5 !text-red-dark font-semibold   transform transition-transform duration-300 ease-in-out ${
              opened ? "rotate-180" : "rotate-0"
            }`}
          />
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
