import { PAGES_LINKS } from "@/contents";
import { cn } from "@/utils/cn";
import {
  ActionIcon,
  Divider,
  Drawer,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header_Drawer() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <ActionIcon
        hiddenFrom="lg"
        variant="transparent"
        onClick={() => setOpened((prev) => !prev)}
      >
        {opened ? (
          <X size={24} className="text-black" />
        ) : (
          <Menu size={24} className="text-black" />
        )}
      </ActionIcon>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <Text fw={500} fz={20}>
            Exclusive
          </Text>
        }
        position="left"
        overlayProps={{ backgroundOpacity: 0.5, blur: 3 }}
        size="80%"
        transitionProps={{ duration: 300 }}
      >
        <Stack gap={20} className="mt-6">
          <TextInput
            hiddenFrom="md"
            placeholder="What are you looking for?"
            variant="filled"
            size="sm"
            className="!bg-gray-100 rounded-md outline-none w-full text-sm"
            rightSection={<Search size={20} />}
            classNames={{
              input: "placeholder:!font-light !outline-none !border-none",
            }}
          />

          <Divider w={"100%"} h={1} />
          {PAGES_LINKS.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              color="dark"
              onClick={() => setOpened(false)}
              className={cn(
                "justify-start font-normal text-base",
                location.pathname === item.link && "font-semibold"
              )}
            >
              {item.label}
            </Link>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}
