import { Link, useLocation } from "react-router-dom";
import {
  Container,
  TextInput,
  Group,
  Box,
  ActionIcon,
  Flex,
} from "@mantine/core";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { PAGE_ROUTES } from "@/contents/routes";
import { cn } from "@/utils/cn";
import { PAGES_LINKS } from "@/contents";
import Header_Drawer from "./header-drawer";
import Language_Switcher from "./language-switcher";

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-white border-b border-b-gray-300 w-full">
      <Box className="bg-black w-full">
        <Container size="lg">
          <Flex
            direction={{ base: "column", sm: "row" }}
            align="center"
            justify="center"
            py={10}
            className="relative gap-2 text-white text-sm"
          >
            <span className="text-xs sm:text-sm text-center">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <Link
                to={PAGE_ROUTES.SHOP}
                className="ml-2 font-semibold underline"
              >
                ShopNow
              </Link>
            </span>

            <Box className="sm:top-1/2 sm:right-0 sm:absolute sm:-translate-y-1/2">
              <Language_Switcher />
            </Box>
          </Flex>
        </Container>
      </Box>

      <Container
        size="lg"
        className="flex flex-wrap justify-between items-center gap-4 py-3 md:pt-8"
      >
        <Link to={PAGE_ROUTES.HOME} className="font-bold text-2xl">
          Exclusive
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {PAGES_LINKS.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              className={cn(
                "font-normal hover:underline underline-offset-4",
                location.pathname === item.link && "font-semibold"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Group gap={16} className="flex items-center">
          <TextInput
            visibleFrom="md"
            placeholder="What are you looking for?"
            variant="filled"
            size="sm"
            className="!bg-gray-100 rounded-md outline-none w-64 text-sm"
            rightSection={<Search size={20} />}
            classNames={{
              input: "placeholder:!font-light !outline-none !border-none",
            }}
          />

          <ActionIcon variant="transparent">
            <Heart size={24} strokeWidth={1.5} className="text-black" />
          </ActionIcon>

          <ActionIcon variant="transparent">
            <ShoppingCart size={24} strokeWidth={1.5} className="text-black" />
          </ActionIcon>

          <Header_Drawer />
        </Group>
      </Container>
    </header>
  );
}
