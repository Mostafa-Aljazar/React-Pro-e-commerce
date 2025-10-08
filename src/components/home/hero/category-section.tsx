import { ActionIcon, Drawer, Group, Text } from "@mantine/core";
import { Menu } from "lucide-react";
import { useState } from "react";
import Category_List from "./category-list";

export default function Category_Section() {
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
